import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { AccessTime, Person, Comment, Star, RocketLaunch, AutoAwesome } from "@mui/icons-material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blog, blogbg } from "../../assets"; // Replace with actual image path

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  { id: 1, title: "Facebook Design Trends for 2025", date: "2024-12-26", author: "Admin", comments: "5 Comments", image: blog },
  { id: 2, title: "Mastering SEO Strategies for 2025", date: "2024-11-20", author: "John Doe", comments: "8 Comments", image: blog },
  { id: 3, title: "How AI is Transforming Marketing", date: "2024-10-10", author: "Jane Smith", comments: "12 Comments", image: blog },
  { id: 4, title: "Top 10 Growth Hacks for Startups", date: "2024-09-15", author: "Alex Carter", comments: "3 Comments", image: blog },
];

const ArticleCard: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const floatingIcons = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Slide-in Animation
    gsap.from(cardRefs.current, {
    //   opacity: 0,
      x: (index) => (index % 2 === 0 ? -100 : 100), // Alternate directions
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".blog-section",
        start: "top 80%",
      },
    });

    // Floating Icon Animation
    gsap.to(".floating-icon", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    // Hover Animation
    cardRefs.current.forEach((card) => {
      if (card) {
        gsap.set(card.querySelector(".overlay"), { opacity: 0, x: -100 });

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.05, duration: 0.3 });
          gsap.to(card.querySelector(".overlay"), { opacity: 1, x: 0, duration: 0.3 });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3 });
          gsap.to(card.querySelector(".overlay"), { opacity: 0, x: -100, duration: 0.3 });
        });
      }
    });
  }, []);

  return (
    <Box sx={{ p: 4,
        // minHeight: "100vh",
        // backgroundImage: `url(${blogbg})`,
        width: "100%",
        height: "auto",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: "5%",
        py: 6,
    
    bgcolor:'white'
    }} className="blog-section">
        <Box
   
        >

            {/* Floating Animated Icons */}
            <Box ref={floatingIcons} sx={{ position: "absolute", top: 50, right: 50, zIndex: 1 }}>
                <Star className="floating-icon" sx={{ color: "gold", fontSize: 40, position: "absolute", top: 20, left: -50 }} />
                <RocketLaunch className="floating-icon" sx={{ color: "orangered", fontSize: 35, position: "absolute", top: 100, right: -30 }} />
                <AutoAwesome className="floating-icon" sx={{ color: "purple", fontSize: 30, position: "absolute", bottom: 50, left: -20 }} />
            </Box>

            {/* Title Section */}
            <Typography variant="subtitle2" sx={{ color: "orangered", fontWeight: "bold", letterSpacing: 1 }}>
                .: NEWS & ARTICLES :.
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
                Browse Our Articles on <br /> Marketing & Growth
            </Typography>

            <Grid container spacing={4} sx={{ mt: 4, flexDirection: "column", alignItems: "center" }}>
                {blogs.map((blog, index) => (
                <Grid key={blog.id} item xs={12} md={10} lg={8}>
                    <Paper
                    ref={(el) => el && (cardRefs.current[index] = el)}
                    elevation={3}
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        p: 2,
                        borderRadius: 2,
                        transition: "transform 0.3s ease-in-out",
                        overflow: "hidden",
                        position: "relative",
                    }}
                    >
                    {/* Image Section */}
                    <Box
                        sx={{
                        flex: 1,
                        overflow: "hidden",
                        borderRadius: 2,
                        width: { xs: "100%", sm: "40%" },
                        height: "200px",
                        position: "relative",
                        }}
                    >
                        <img
                        src={blog.image}
                        alt="Article"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                            transition: "transform 0.3s",
                        }}
                        />
                        {/* Overlay Animation */}
                        <Box
                        className="overlay"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0, 0, 0, 0.6)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0,
                            transition: "all 0.3s ease-in-out",
                            color: "white",
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                        >
                        View More
                        </Box>
                    </Box>

                    {/* Content Section */}
                    <Box sx={{ flex: 2, pl: { xs: 0, sm: 3 }, mt: { xs: 2, sm: 0 }, textAlign: "left" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "gray", fontSize: 14 }}>
                        <AccessTime fontSize="small" />
                        <Typography variant="body2" color="black">{blog.date}</Typography>
                        <Person fontSize="small" />
                        <Typography variant="body2" color="black">{blog.author}</Typography>
                        <Comment fontSize="small" />
                        <Typography variant="body2" color="black">{blog.comments}</Typography>
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1, color: "black" }}>
                        {blog.title}
                        </Typography>

                        <Typography sx={{ color: "orangered", fontWeight: "bold", mt: 1, cursor: "pointer" }}>
                        Read More
                        </Typography>
                    </Box>
                    </Paper>
                </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
  );
};

export default ArticleCard;
