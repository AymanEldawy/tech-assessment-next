import "./globals.scss";

export const metadata = {
  title: "Tech assessment",
  description: "Implementing 2 sections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
