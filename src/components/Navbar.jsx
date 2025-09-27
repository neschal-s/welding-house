import React from "react";
export default function Navbar(){
    const [open, setOpen] = React.useState(false);
    return(
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Welding House</h1>
      
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#products" className="hover:text-yellow-400">Products</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-700 flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#home" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="hover:text-yellow-400" onClick={() => setOpen(false)}>About</a>
          <a href="#products" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Products</a>
          <a href="#contact" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>

    )
}