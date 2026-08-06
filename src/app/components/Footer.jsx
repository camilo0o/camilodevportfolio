export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 bg-black/60 py-8 text-center backdrop-blur">
      <div className="flex gap-6">
        <a
          href="https://github.com/camilo0o"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            src="/simple-icons--github.svg"
            alt="GitHub"
            className="h-6 w-6 opacity-80 transition hover:opacity-100"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/camilo-fagundez"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="/simple-icons--linkedin.svg"
            alt="LinkedIn"
            className="h-6 w-6 opacity-80 transition hover:opacity-100"
          />
        </a>
      </div>

      <p className="font-mono text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Camilo Fagundez · +598 92 336 666 ·
        camilo.pfs@gmail.com
      </p>
    </footer>
  );
}