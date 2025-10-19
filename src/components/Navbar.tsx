"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const Navbar = () => {
  const pathname = usePathname() || "";
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const lastYRef = useRef(0);
  const rAFRef = useRef<number | null>(null);
  const hiddenRef = useRef(hidden);
  // Suppress observer updates during programmatic scrolls (e.g., clicking Home/logo)
  const suppressObserverRef = useRef(false);

  useEffect(() => {
    hiddenRef.current = hidden;
  }, [hidden]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceMotion = mql.matches;
    // Initialize scrolled state on mount
    const initialY = window.scrollY || window.pageYOffset;
    setScrolled(initialY > 10);
    const onScroll = () => {
      if (reduceMotion) return;
      if (rAFRef.current != null) return;
      rAFRef.current = window.requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        const lastY = lastYRef.current;
        const shouldHide = y > lastY && y > 100;
        if (shouldHide !== hiddenRef.current) {
          setHidden(shouldHide);
        }
        // Toggle background based on scroll position
        setScrolled(y > 10);
        lastYRef.current = y;
        rAFRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const onChange = () => {
      setHidden(false);
    };
    mql.addEventListener?.("change", onChange);

    return () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      window.removeEventListener("scroll", onScroll);
      mql.removeEventListener?.("change", onChange);
    };
  }, []);

  useEffect(() => {
    const sections = ["about", "programs", "impact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (suppressObserverRef.current) return; // ignore while suppressed
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries[0].target as HTMLElement;
          const sectionId = mostVisible.id;
          const newHash = `#${sectionId}`;

          if (window.location.hash !== newHash) {
            setActiveSection(newHash);
            window.history.replaceState(null, "", newHash);
          }
        } else {
          const scrollY = window.scrollY || window.pageYOffset;
          if (scrollY < 100 && window.location.hash) {
            setActiveSection(null);
            window.history.replaceState(null, "", "/");
          }
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -30% 0px",
      }
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const initializeActiveSection = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (["#about", "#programs", "#impact"].includes(hash)) {
          setActiveSection(hash);
        } else if (pathname === "/") {
          setActiveSection(null);
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (["#about", "#programs", "#impact"].includes(hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection(null);
      }
    };

    initializeActiveSection();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "#about",
    },
    {
      name: "Programs",
      link: "#programs",
    },
    {
      name: "Impact",
      link: "#impact",
    },
  ];
  return (
    <nav aria-label="Primary navigation">
      <div
        className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300 will-change-transform
          ${
            scrolled
              ? "bg-white/80 shadow-xl backdrop-blur-md"
              : "bg-transparent shadow-none backdrop-blur-0"
          }
          ${hidden ? " -translate-y-20 opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center">
            <Link
              href={"/"}
              className="flex items-center space-x-2"
              onClick={(e) => {
                // Prevent default navigation to handle scroll and active state
                e.preventDefault();
                suppressObserverRef.current = true;
                setActiveSection(null);
                window.history.pushState(null, "", "/");
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileMenuOpen(false);
                // Re-enable observer updates after scroll settles
                setTimeout(() => {
                  suppressObserverRef.current = false;
                }, 500);
              }}
            >
              <Image
                src={"/logo.png"}
                alt="logo"
                width={120}
                height={40}
                className={"md:h-[40px] md:w-[120px]"}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-4 text-sm md:flex md:space-x-8 md:text-base text-[#010101]">
            {navLinks.map((link) => {
              const isActive = (() => {
                if (link.link === "/") {
                  const currentHash =
                    typeof window !== "undefined" ? window.location.hash : "";
                  return pathname === "/" && !currentHash && !activeSection;
                }
                if (link.link.startsWith("#")) {
                  const currentHash =
                    typeof window !== "undefined" ? window.location.hash : "";
                  return (
                    activeSection === link.link || currentHash === link.link
                  );
                }
                return pathname === link.link;
              })();

              const handleClick = (e: React.MouseEvent) => {
                if (link.link.startsWith("#")) {
                  e.preventDefault();
                  const targetElement = document.querySelector(link.link);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    // Delay updating activeSection until scroll finishes
                    setTimeout(() => {
                      setActiveSection(link.link);
                      window.history.pushState(null, "", link.link);
                    }, 400); // 400ms for smooth scroll
                  }
                } else if (link.link === "/") {
                  suppressObserverRef.current = true;
                  setActiveSection(null);
                  window.history.pushState(null, "", "/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => {
                    suppressObserverRef.current = false;
                  }, 500);
                }
              };

              return (
                <Link
                  key={link.name}
                  href={link.link}
                  onClick={handleClick}
                  className={`relative cursor-pointer font-bold transition-all duration-300 ease-out hover:text-[#FFD45C] focus:text-[#FFD45C] focus:outline-none ${
                    isActive
                      ? "scale-105 text-[#FFD45C]"
                      : "text-[#010101] hover:scale-105"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 animate-pulse rounded-full bg-[#C1FF72]" />
                  )} */}
                </Link>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Link href={"#donate"} className="cursor-pointer ml-2">
                <Button className="bg-[#FFD45C] hover:bg-[#FFD45C]/90 text-[#010101] cursor-pointer font-bold shadow-sm px-6 py-2">
                  Get Involved
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center text-[#010101] transition-colors hover:text-[#FFD45C] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-lg transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`flex h-full flex-col items-center justify-center space-y-8 transition-all duration-500 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, index) => {
            const isActive = (() => {
              if (link.link === "/") {
                const currentHash =
                  typeof window !== "undefined" ? window.location.hash : "";
                return pathname === "/" && !currentHash && !activeSection;
              }
              if (link.link.startsWith("#")) {
                const currentHash =
                  typeof window !== "undefined" ? window.location.hash : "";
                return activeSection === link.link || currentHash === link.link;
              }
              return pathname === link.link;
            })();

            const handleMobileClick = (e: React.MouseEvent) => {
              if (link.link.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(link.link);
                if (targetElement) {
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 300);
                  setTimeout(() => {
                    setActiveSection(link.link);
                    window.history.pushState(null, "", link.link);
                  }, 700);
                }
              } else if (link.link === "/") {
                e.preventDefault();
                suppressObserverRef.current = true;
                setActiveSection(null);
                setMobileMenuOpen(false);
                window.history.pushState(null, "", "/");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 300);
                setTimeout(() => {
                  suppressObserverRef.current = false;
                }, 800);
              }
            };

            return (
              <Link
                key={link.name}
                href={link.link}
                onClick={handleMobileClick}
                className={`group relative text-4xl font-bold transition-all duration-300 ease-out ${
                  isActive ? "text-[#FFD45C]/90" : "text-[#010101]"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-[#FFD45C]">
                  {link.name}
                </span>
                {/* {isActive && (
                  <span className="absolute inset-x-0 -bottom-2 h-1 animate-pulse rounded-full bg-[#C1FF72]" />
                )} */}
              </Link>
            );
          })}

          {/* Mobile Get Involved Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: mobileMenuOpen ? navLinks.length * 0.05 + 0.1 : 0,
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-4/5 max-w-sm"
          >
            <Link
              href={"#contact"}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.querySelector("#contact");
                if (targetElement) {
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 300);
                  setTimeout(() => {
                    window.history.pushState(null, "", "#contact");
                  }, 700);
                }
              }}
            >
              <Button className="w-full bg-[#FFD45C] hover:bg-[#FFD45C]/90 text-[#010101] font-bold text-xl py-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FFD45C] hover:border-[#FFB800]">
                Get Involved
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
