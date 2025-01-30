import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { content_management, pay_per_click, seo } from "../../../assets";

interface Feature {
  image: string;
  title: string;
  description: string;
  route: string;
}

const features: Feature[] = [
  {
    image: seo,
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your business's online visibility with expert SEO services. Rank higher on Google, enhance credibility, and drive organic traffic. Our strategies include keyword research, optimized content, and high-quality backlinks.",
    route: "/services/digital-marketing/seo",
  },
  {
    image: content_management,
    title: "Social Media Management",
    description:
      "Enhance your brand with professional Social Media Marketing (SMM). Engage your audience with targeted campaigns on platforms like Facebook, Instagram, and LinkedIn. Build customer loyalty and increase brand visibility.",
    route: "/services/digital-marketing/smm",
  },
  {
    image: pay_per_click,
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Drive business growth with high-ROI PPC advertising. Generate quality leads and conversions with precision-targeted campaigns on Google Ads & Facebook. Increase brand reach and maximize returns on ad spend.",
    route: "/services/digital-marketing/ppc",
  },
];

const ServiceSection: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  const handleShowMore = (route: string) => {
    navigate(route);
  };

  return (
    <Box ref={sectionRef} sx={{ backgroundColor: "#111", py: 6 }}>
      <Container>
        <Box textAlign="center" color="white">
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontWeight: 700,
              maxWidth: { xs: "90%", sm: "80%", md: "70%" },
              mb: { xs: 4, sm: 10 },
              mx: "auto",
              letterSpacing: 1.2,
            }}
          >
            Services We Provide as a Leading Digital Marketing Agency in Hyderabad
          </Typography>

          <Grid container spacing={5} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    borderRadius: "15px",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.5s ease, box-shadow 0.5s ease",
                    backdropFilter: "blur(10px)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 3,
                    textAlign: "center",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleShowMore(feature.route)}
                >
                  {/* Image Styled as Icon */}
                  <Box
                    sx={{
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      marginBottom: 2,
                      transition: "transform 0.5s ease",
                      "&:hover": { transform: "scale(1.2)" },
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  {/* Card Content */}
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ccc",
                        textAlign: "justify",
                        fontSize: "14px",
                        lineHeight: "1.6",
                      }}
                    >
                      {feature.description.split(" ").slice(0, 20).join(" ")}...{" "}
                      <Link
                        component="button"
                        variant="body2"
                        sx={{
                          color: "#fc0000",
                          textDecoration: "underline",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowMore(feature.route);
                        }}
                      >
                        See More
                      </Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceSection;
