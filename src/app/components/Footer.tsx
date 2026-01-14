export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white">
            © {new Date().getFullYear()} The Ridge Realty Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}