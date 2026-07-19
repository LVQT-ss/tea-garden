export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-muted sm:flex-row sm:text-left lg:px-10">
        <p className="font-bold text-foreground">LVQT</p>
        <p>© {new Date().getFullYear()} LVQT. All rights reserved.</p>
      </div>
    </footer>
  );
}
