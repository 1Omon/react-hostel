import React from "react";
import Header from "./components/Header";
import HostelCard from "./components/HostelCard";
import logo from "./assets/react.svg";
import AboutHostel from "./components/AboutHostel";
import SignUp from "./components/SignUp";

const aboutHostelContent = {
  name: "Ultimate Hostel",
  images: [
    { src: "/beru.png", alt: "image" },
    { src: "/epic.png", alt: "image" },
    { src: "/epic2.png", alt: "image" },
    { src: "/beru.png", alt: "image" },
  ],
  content:
    "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah d Blah dhjkach kjk hvjhkqcbhajbcjhak bcjhklscdl j asjkcbakjlcbajkcljkacbcaklcbk jacklacba lkkj jk bkcjbl kcjbkcjbjk cdbjk lbvkadvkb kjb jkb kjcklabjk clbck  jkbls djkbal kbjk bakjbkjabkjlbsd bjbjka mlkdaciuww cw lcb ajklcb jkabcjc kbkjllacb lsadkjbcj cb jklckj abc cjklbasklba lkkaa kjnkj vlsuicksl v vj lkjabjk djk bjksjkvbjvkj bjkavjkbjkb jkvjkblkbkj vb ajkbjk bvjklbsjkjbjk",
};

const otherHostels = [
  {
    name: "Canam Hostel",
    image: "/epic.png",
    location: "Ayeduase",
  },
  {
    name: "Adom Bi Hostel",
    image: "/beru.png",
    location: "Kotei",
  },
  {
    name: "Hall 7",
    image: "/epic.png",
    location: "Campus",
  },
  {
    name: "Evandy",
    image: "/epic.png",
    location: "Ayeduase - Newsite",
  },
];

export default function App() {
  return (
    <>
      <SignUp />
    </>
  );
}
























// import { useState, useEffect } from "react";
// import {
//   ChevronDown,
//   ArrowRight,
//   Terminal,
//   Shield,
//   Rocket,
//   Menu,
//   X,
// } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { Button } from "./components/Button";

// export default function LandingPage() {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       // Check if page is scrolled for navbar effect
//       setIsScrolled(window.scrollY > 10);

//       // Handle active section detection
//       const sections = ["home", "about", "services", "values", "why", "contact"];
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { isSubmitting, isSubmitSuccessful },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       if (!response.ok) throw new Error("Form submission failed");
//       reset();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   const scrollToSection = (sectionId) => {
//     setIsNavOpen(false);
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "services", label: "Services" },
//     { id: "values", label: "Values" },
//     { id: "why", label: "Why XCUXION" },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-900 antialiased">
//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-white/90 backdrop-blur-sm"}`}>
//         <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
//           <div className="flex items-center">
//             <img src="/logo-text.png" alt="logo" className="w-[120px] h-9 object-cover" />
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`px-3 py-2 text-sm font-medium transition-colors hover:text-purple-700 ${
//                   activeSection === item.id ? "text-purple-700" : "text-gray-600"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//             <Button
//               size="sm"
//               className="ml-2"
//               onClick={() => scrollToSection("contact")}
//             >
//               Join Us
//             </Button>
//           </div>

//           {/* Mobile Navigation Toggle */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsNavOpen(!isNavOpen)}
//             >
//               {isNavOpen ? <X size={20} /> : <Menu size={20} />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isNavOpen && (
//           <div className="md:hidden bg-white border-t shadow-lg">
//             <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-3 py-2 text-left text-sm font-medium transition-colors hover:text-purple-700 ${
//                     activeSection === item.id ? "text-purple-700" : "text-gray-600"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <Button
//                 className="mt-2"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Join Us
//               </Button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-gray-50 to-gray-100 relative"
//       >
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               We are the{" "}
//               <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
//                 builders
//               </span>
//               . The{" "}
//               <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
//                 doers
//               </span>
//               . The ones who choose{" "}
//               <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
//                 creation over consumption
//               </span>
//               .
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 mb-10">
//               Welcome to XCUXION — a movement, a force, and a future built by
//               action.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Button
//                 size="xl"
//                 onClick={() => scrollToSection("about")}
//               >
//                 Discover More <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="xl"
//                 onClick={() => scrollToSection("services")}
//               >
//                 Our Services
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-6 left-0 right-0 flex justify-center">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => scrollToSection("about")}
//             className="animate-bounce"
//           >
//             <ChevronDown className="text-purple-700 h-6 w-6" />
//           </Button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 md:py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
//               About{" "}
//               <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
//                 XCUXION
//               </span>
//             </h2>
//             <div className="space-y-6 text-lg text-gray-700">
//               <p>
//                 XCUXION is not just a school. It&apos;s a{" "}
//                 <strong className="text-gray-900">movement</strong> where
//                 innovators, creators, and problem-solvers come together to build
//                 solutions that change lives.
//               </p>
//               <p>
//                 We exist to <strong className="text-gray-900">equip</strong>,{" "}
//                 <strong className="text-gray-900">connect</strong>, and{" "}
//                 <strong className="text-gray-900">launch</strong> the next
//                 generation of African builders — students, professionals,
//                 startups, and communities — into a future shaped by their own
//                 hands.
//               </p>
//             </div>
//             <div className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-lg border border-purple-100">
//               <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//               <p className="text-lg text-gray-800">
//                 To raise a generation of fearless builders and innovators who
//                 create sustainable solutions, launch bold ventures, and
//                 transform their communities — starting from Africa to the world.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 md:py-28 bg-gray-50">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
//             <p className="text-lg text-gray-700">
//               At XCUXION, we operate across three powerful services:
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Service 1 */}
//             <div className="bg-white rounded-lg shadow-md transition-all hover:shadow-lg p-8">
//               <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
//                 <Terminal className="h-6 w-6 text-purple-700" />
//               </div>
//               <h3 className="text-xl font-bold mb-4 flex items-center">
//                 School of Engineering & Techpreneurship
//               </h3>
//               <p className="text-gray-700">
//                 Our elite training ground where students master tech, business,
//                 and innovation — and build real-world products and startups.
//               </p>
//               <a href="https://school.xcuxion.org/school" target="_blank">
//                 <Button
//                   variant="ghost"
//                   className="mt-6 text-purple-700 hover:text-purple-800 hover:bg-purple-50 p-0"
//                 >
//                   Learn more <ArrowRight className="ml-1 h-4 w-4" />
//                 </Button>
//               </a>
//             </div>

//             {/* Service 2 */}
//             <div className="bg-white rounded-lg shadow-md transition-all hover:shadow-lg p-8">
//               <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
//                 <Shield className="h-6 w-6 text-indigo-700" />
//               </div>
//               <h3 className="text-xl font-bold mb-4 flex items-center">
//                 Engineers&apos; Guild
//               </h3>
//               <p className="text-gray-700">
//                 Our professional network of top talents executing real-world
//                 tech projects for companies and startups across the globe.
//               </p>
//               {/* <Button
//                 variant="ghost"
//                 className="mt-6 text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 p-0"
//               >
//                 Learn more <ArrowRight className="ml-1 h-4 w-4" />
//               </Button> */}
//             </div>

//             {/* Service 3 */}
//             <div className="bg-white rounded-lg shadow-md transition-all hover:shadow-lg p-8">
//               <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
//                 <Rocket className="h-6 w-6 text-purple-700" />
//               </div>
//               <h3 className="text-xl font-bold mb-4 flex items-center">
//                 Startups Center
//               </h3>
//               <p className="text-gray-700">
//                 Our venture support system helping builders turn ideas and MVPs
//                 into thriving businesses through mentorship, resources, and
//                 launch support.
//               </p>
//               {/* <Button
//                 variant="ghost"
//                 className="mt-6 text-purple-700 hover:text-purple-800 hover:bg-purple-50 p-0"
//               >
//                 Learn more <ArrowRight className="ml-1 h-4 w-4" />
//               </Button> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section id="values" className="py-20 md:py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//               Our Values
//             </h2>

//             <div className="space-y-6">
//               {[
//                 {
//                   title: "Creation Over Consumption",
//                   description: "We are makers, not just users.",
//                 },
//                 {
//                   title: "Courage Over Comfort",
//                   description: "We choose the hard path that leads to growth.",
//                 },
//                 {
//                   title: "Community Over Isolation",
//                   description: "We build stronger together.",
//                 },
//                 {
//                   title: "Execution Over Excuses",
//                   description: "We deliver.",
//                 },
//                 {
//                   title: "Impact Over Vanity",
//                   description: "We solve real problems, not just chase trends.",
//                 },
//               ].map((value, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start p-6 rounded-lg transition-all bg-gray-50 hover:bg-gray-100"
//                 >
//                   <div className="h-10 w-10 flex-shrink-0 bg-gradient-to-r from-purple-700 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
//                     {index + 1}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-2">{value.title}</h3>
//                     <p className="text-gray-700">{value.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why XCUXION Section */}
//       <section
//         id="why"
//         className="py-20 md:py-28 bg-gradient-to-br from-purple-900 to-indigo-900 text-white"
//       >
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-10">
//               Why XCUXION?
//             </h2>

//             <p className="text-xl leading-relaxed mb-8">
//               Because the world doesn&apos;t change by waiting. It changes when
//               people build. At XCUXION, we teach you to build. We connect you to
//               a tribe of builders. And we launch you into a world that&apos;s
//               hungry for real solutions.
//             </p>

//             <p className="text-xl leading-relaxed mb-12">
//               We are not here to follow trends. We are here to create the
//               future.
//             </p>

//             <div className="text-2xl md:text-3xl font-bold italic mb-12">
//               XCUXION is where your builder story begins.
//             </div>

//             <Button
//               className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-6 text-lg"
//               onClick={() => scrollToSection("contact")}
//             >
//               Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Contact/Join Section */}
//       <section id="contact" className="py-20 md:py-28">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
//               Join the Movement
//             </h2>

//             <div className="bg-white rounded-lg shadow-lg p-8">
//               {isSubmitSuccessful ? (
//                 <div className="text-center py-8">
//                   <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
//                     <svg
//                       className="h-6 w-6 text-green-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-medium text-gray-900 mb-2">
//                     Thank you!
//                   </h3>
//                   <p className="text-gray-600">
//                     Your submission has been received. We&apos;ll be in touch
//                     soon.
//                   </p>
//                   <Button
//                     className="mt-6 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white"
//                     onClick={() => window.location.reload()}
//                   >
//                     Submit Another Response
//                   </Button>
//                 </div>
//               ) : (
//                 <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label
//                         htmlFor="firstName"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         First Name
//                       </label>
//                       <input
//                         type="text"
//                         id="firstName"
//                         {...register("firstName", { required: true })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                         placeholder="Enter your first name"
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="lastName"
//                         className="block text-sm font-medium text-gray-700 mb-1"
//                       >
//                         Last Name
//                       </label>
//                       <input
//                         type="text"
//                         id="lastName"
//                         {...register("lastName", { required: true })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                         placeholder="Enter your last name"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       {...register("email", { required: true })}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                       placeholder="Enter your email address"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="interest"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       I&apos;m interested in
//                     </label>
//                     <select
//                       id="interest"
//                       {...register("interest", { required: true })}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                     >
//                       <option value="" disabled selected>
//                         Select your interest
//                       </option>
//                       <option value="school">XCUXION School</option>
//                       <option value="guild">XCUXION Guild</option>
//                       <option value="launchpad">XCUXION Launchpad</option>
//                       <option value="partnership">
//                         Partnership Opportunities
//                       </option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Message (Optional)
//                     </label>
//                     <textarea
//                       id="message"
//                       rows={4}
//                       {...register("message")}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                       placeholder="Tell us about your goals or questions"
//                     ></textarea>
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white py-3"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting..." : "Submit"}
//                   </Button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">XCUXION</h3>
//               <p className="text-gray-400">
//                 A movement where innovators, creators, and problem-solvers come
//                 together to build solutions that change lives.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-lg font-medium mb-4">Services</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     XCUXION School
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     XCUXION Guild
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     XCUXION Launchpad
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-medium mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-medium mb-4">Connect</h4>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
//             <p>
//               &copy; {new Date().getFullYear()} XCUXION. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
