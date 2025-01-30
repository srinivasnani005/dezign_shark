import React, { useEffect, useRef } from "react";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import gsap from "gsap";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface TopHeaderProps {
  value: string;
  breadcrumbs?: BreadcrumbItem[];
}

const TopHeader: React.FC<TopHeaderProps> = ({ value, breadcrumbs = [] }) => {
  const theme = useTheme();
  const turbulenceRef = useRef<SVGFETurbulenceElement | null>(null);

  useEffect(() => {
    if (turbulenceRef.current) {
      gsap.to(turbulenceRef.current, {
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        attr: {
          baseFrequency: "0.02 0.08", // Adjust frequency for a dynamic effect
        },
      });
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, sm: 4, md: 6, },
        // pt: 5,
        pb: 2,
        // background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        zIndex: 10,
      }}
    >
      {/* Animated Blob Background Using SVG Filter */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          opacity: 0.5,
        }}
      >
        <defs>
          <filter id="blobFilter">
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.01 0.03"
              numOctaves={3}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={50}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#blobFilter)" />
      </svg>

      <Container
        maxWidth="lg"
        sx={{
          textAlign: "left",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: theme.spacing(1),
          zIndex: 2,
        }}
      >
        {/* Page Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            mb: theme.spacing(2),
            color: "#fff",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.9)",
          }}
        >
          {value}
        </Typography>

        {/* Breadcrumb Navigation */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="›"
            sx={{
              color: "#fff",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: "8px",
              backdropFilter: "blur(10px)",
              boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Home Breadcrumb */}
            <Link
              to="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <HomeIcon
                sx={{
                  fontSize: 20,
                  marginRight: "5px",
                  color: "#fff",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#FFD700", transform: "scale(1.1)" },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "#fff",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)",
                  "&:hover": { color: "#FFD700" },
                  transition: "all 0.3s ease",
                }}
              >
                Home
              </Typography>
            </Link>

            {/* Dynamic Breadcrumbs */}
            {breadcrumbs.map((breadcrumb, index) =>
              breadcrumb.path ? (
                <Link
                  key={index}
                  to={breadcrumb.path}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: "#fff",
                      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#FFD700",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {breadcrumb.label}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  key={index}
                  sx={{
                    fontWeight: 600,
                    color: "#fff",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)",
                  }}
                >
                  {breadcrumb.label}
                </Typography>
              )
            )}

            {/* Current Page */}
            <Typography
              sx={{
                color: "#FFD700",
                textShadow: "2px 2px 10px rgba(255, 215, 0, 0.8)",
                fontWeight: 700,
              }}
            >
              {value}
            </Typography>
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;
