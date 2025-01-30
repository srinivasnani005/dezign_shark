import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Typography,
  IconButton,
  Container,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { gsap } from "gsap";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { packagesbg, trione } from "../../assets"; // Adjust import path as needed

// Styled Components
const StyledTableContainer = styled(TableContainer)({
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "10px",
  overflow: "hidden",
  padding: "20px",
  position: "relative",
});

const StyledTable = styled(Table)({
  borderCollapse: "collapse",
  width: "100%",
  marginTop: "100px",
});

const AnimatedTableCell = styled(TableCell)({
  color: "white",
  textAlign: "center",
  transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
  padding: "16px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
});

const AnimatedHeaderCell = styled(AnimatedTableCell)({
  backgroundColor: "#222",
  fontSize: "18px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  borderTop: "2px solid white",
  color: "#fc0000",
});

const ArrowButton = styled(IconButton)({
  backgroundColor: "#444",
  color: "white",
  transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "yellow", // Change button background on hover
    color: "black", // Change icon color on hover
  },
});

const ShowMoreButton = styled(Button)({
  marginTop: "20px",
  backgroundColor: "#fc0000",
  color: "white",
  "&:hover": {
    backgroundColor: "#d00000",
  },
});

// Row styling on hover
const StyledTableRow = styled(TableRow)({
  transition: "background 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#333", // Light red on hover
    "& td:first-of-type": {
      color: "#fc0000", // Change Feature text color
    },
    "& td:last-of-type button": {
      backgroundColor: "#fc0000", // Change button background
      color: "white", // Change icon color
    },
  },
});


const TriangleImage = styled("img")({
  position: "absolute",
  width: "150px",
  height: "150px",
  opacity: 0.8,
});

// Data from Image
const packagesData = [
  { feature: "Channels Covered", meg: "5 Channels", shark: "4 Channels", piranha: "3 Channels" },
  { feature: "Facebook", meg: "✔️", shark: "✔️", piranha: "✔️" },
  { feature: "Instagram", meg: "✔️", shark: "✔️", piranha: "✔️" },
  { feature: "LinkedIn", meg: "✔️", shark: "✔️", piranha: "❌" },
  { feature: "YouTube", meg: "✔️", shark: "❌", piranha: "❌" },
  { feature: "Twitter", meg: "✔️", shark: "✔️", piranha: "❌" },
  { feature: "Content Creation", meg: "12 Posts/Month", shark: "10 Posts/Month", piranha: "4 Posts/Month" },
  { feature: "Graphic Design", meg: "Premium Graphics", shark: "Custom Graphics", piranha: "Basic Graphics" },
  { feature: "Informative Posts", meg: "6 / Month", shark: "4 / Month", piranha: "2 / Month" },
  { feature: "Videos", meg: "6 HQ Videos (30 Secs Each)", shark: "4 Videos (30 Secs Each)", piranha: "2 Videos (25 Secs Each)" },
  { feature: "Google Ads Management", meg: "1 Google Ads Setup & Management", shark: "1 Google Ads Setup & Management", piranha: "❌" },
  { feature: "Options", meg: "Up to 3 Campaigns", shark: "Up to 2 Campaigns", piranha: "1 Revision/Post/Month" },
  { feature: "Lead Generation Campaigns (Meta)", meg: "Up to 3 Campaigns", shark: "Up to 2 Campaigns", piranha: "❌" },
  { feature: "Support", meg: "Weekdays 10AM-6PM Chat & Phone Support", shark: "Weekdays 10AM-6PM Chat & Phone Support", piranha: "Weekdays 10AM-6PM Chat Support" },
  { feature: "Strategy Development", meg: "Customized Story Telling + Comprehensive Strategy", shark: "Location + Project Highlights Strategy", piranha: "Project Highlights" },
  { feature: "Site Visit", meg: "✔️", shark: "✔️", piranha: "❌" },
  { feature: "Exclusive Add-Ons", meg: "2 Premium Add-Ons", shark: "1 Add-On", piranha: "❌" },
];

const PackagesTable: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const rowsRef = useRef<(HTMLTableRowElement | null)[]>([]);
  const headerRef = useRef<(HTMLTableCellElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const triangleRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    gsap.from(headerRef.current.filter(Boolean), {
      // y: -20,
      // opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });

    // Hide rows beyond the first 5 initially
    rowsRef.current.slice(5).forEach((row) => {
      if (row) {
        gsap.set(row, { display: "none" });
      }
    });
      // Floating Triangles
      triangleRefs.current.forEach((triangle, index) => {
        gsap.to(triangle, {
          y: -15,
          rotate: index % 2 === 0 ? 360 : -360,
          repeat: -1,
          yoyo: true,
          duration: 4,
          ease: "sine.inOut",
        });
      });

          // Floating Image Animation
    gsap.to(imagesRef.current.filter(Boolean), {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

  }, []);

  const toggleRows = () => {
    if (showAll) {
      gsap.to(rowsRef.current.slice(5), {
        opacity: 0,
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          rowsRef.current.slice(5).forEach((row) => row && gsap.set(row, { display: "none" }));
        },
      });
    } else {
      rowsRef.current.slice(5).forEach((row) => row && gsap.set(row, { display: "table-row" }));
      gsap.to(rowsRef.current.slice(5), { opacity: 1, height: "auto", duration: 0.5, ease: "power3.inOut" });
    }
    setShowAll(!showAll);
  };

  return (
    <Box position="relative" sx={{ py: 8, textAlign: "center", background: `url(${packagesbg}) center/cover no-repeat`, color: "white" }}>
       <Box position="absolute" top="100px" left="2%">
            <TriangleImage ref={(el) => triangleRefs.current.push(el)} src={trione} alt="Triangle" width="150px" />
        </Box>
        
      <Container>
        <StyledTableContainer>
          <Typography variant="h5" align="center" sx={{ color: "#fc0000", padding: 2 }}>
            .: OUR PACKAGES :.
          </Typography>
          <Typography variant="h4" align="center" sx={{ color: "white", fontWeight: "bold", marginBottom: 2 }}>
            Compare Our Marketing Packages
          </Typography>
         

          <StyledTable>
            <TableHead>
              <TableRow>
                {["FEATURES", "MEG (Advanced)", "SHARK (Growth)", "PIRANHA (Beginner)", "Action"].map((header, index) => (
                  <AnimatedHeaderCell key={index} ref={(el: HTMLTableCellElement | null) => (headerRef.current[index] = el)}>
                    {header}
                  </AnimatedHeaderCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {packagesData.map((item, index) => (
                <StyledTableRow key={index} ref={(el) => (rowsRef.current[index] = el)}>
                  <AnimatedTableCell sx={{ textAlign: "left", paddingLeft: "20px", fontWeight: 500 }}>{item.feature}</AnimatedTableCell>
                  <AnimatedTableCell>{item.meg}</AnimatedTableCell>
                  <AnimatedTableCell>{item.shark}</AnimatedTableCell>
                  <AnimatedTableCell>{item.piranha}</AnimatedTableCell>
                  <AnimatedTableCell>
                    <ArrowButton >
                      <CgArrowsExpandUpRight />
                    </ArrowButton>
                  </AnimatedTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </StyledTable>
          <ShowMoreButton onClick={toggleRows}>
            {showAll ? "Show Less" : "Show More"}
          </ShowMoreButton>
    
          
        </StyledTableContainer>
      </Container>
      <Box position="absolute" bottom="200px" right="8%">
            <TriangleImage ref={(el) => triangleRefs.current.push(el)} src={trione} alt="Triangle" width="150px" />
      </Box>
    </Box>
  );
};

export default PackagesTable;
