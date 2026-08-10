export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-4 text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Fernando Ortiz - Full Stack
          Developer
        </p>
      </div>
    </footer>
  );
};
