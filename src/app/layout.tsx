import "./globals.css";
import BreakingTicker from "@/components/BreakingTicker";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BreakingTicker />
        {children}
      </body>
    </html>
  );
}