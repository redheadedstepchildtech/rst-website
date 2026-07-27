"""Preview-only proxy.

This app is a Next.js app whose API routes are served by Next on port 3000.
The Emergent preview ingress routes /api/* to this backend on port 8001, so we
forward those requests to the Next server. This is only needed for the preview
environment; on Vercel, Next handles all routing natively.
"""

import httpx
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

NEXT_ORIGIN = "http://localhost:3000"


@app.get("/api/health")
async def health():
    return {"status": "ok", "proxy": "next"}


@app.api_route(
    "/api/{path:path}",
    methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
)
async def proxy(path: str, request: Request):
    url = f"{NEXT_ORIGIN}/api/{path}"
    body = await request.body()
    headers = {
        k: v
        for k, v in request.headers.items()
        if k.lower() not in ("host", "content-length")
    }
    async with httpx.AsyncClient(timeout=30.0) as client:
        upstream = await client.request(
            request.method,
            url,
            content=body,
            headers=headers,
            params=dict(request.query_params),
        )
    return Response(
        content=upstream.content,
        status_code=upstream.status_code,
        media_type=upstream.headers.get("content-type", "application/json"),
    )
