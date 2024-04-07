export default function Footer() {
  return (
    <footer className="flex justify-center p-4 bg-white text-amber-700">
      <p>
        &copy; {new Date().getFullYear()} Shyju Viswambaran. All rights
        reserved.
      </p>
    </footer>
  );
}
