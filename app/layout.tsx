import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Redheaded Stepchild Tech",
  description: "Building tools that help real people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <NavBar />
        <main className="pt-10">{children}</main>
      </body>
    </html>
  );
}
