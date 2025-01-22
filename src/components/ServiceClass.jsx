import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ShieldIcon from "@mui/icons-material/Shield";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import styles from "./ServiceClass.module.css";
import CalculateIcon from "@mui/icons-material/Calculate";
const ServiceClass = () => {
  const features = [
    {
      icon: <DocumentScannerIcon sx={{ fontSize: "70px", color: "#000" }} />,
      title: "Digital Contracting",
      description:
        "Ensuring simplicity, swiftly sealing deals, and offering eSign, eContract, Online Payment, & Delivery.",
    },
    {
      icon: <ShieldIcon sx={{ fontSize: "70px", color: "#000" }} />,
      title: "Safe and Secure",
      description:
        "Dive into Cutting-Edge Technology, Where Excellence is Redefined and Delivered with Every Interaction.",
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: "70px", color: "#000" }} />,
      title: "Verified Dealers",
      description:
        "Connecting you to the USA's most trusted car professionals and genuine private sellers. Safe, straightforward, and reliable every time.",
    },
  ];
  const services = [
    {
      icon: <DocumentScannerIcon className={styles.iconMobile} />,
      title: "Digital Contracting",
    },
    {
      icon: <ShieldIcon className={styles.iconMobile} />,
      title: "Safe and Secure",
    },
    {
      icon: <VerifiedUserIcon className={styles.iconMobile} />,
      title: "Verified Dealers",
    },
    {
      icon: <CalculateIcon className={styles.iconMobile} />,
      title: "Loan Calculator",
    },
  ];
  return (
    <>
      <Box className={styles.container}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card className={styles.card}>
                <CardContent>
                  <Box>{feature.icon}</Box>
                  <Typography variant="h6" className={styles.title}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className={styles.description}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={styles.containerMobileFinal}>
        <h1 className={styles.containerHeading}>Services</h1>
        <Box className={styles.containerMobile}>
          <div className={styles.serviceMobile}>
            {services.map((service, index) => (
              <Box key={index} className={styles.serviceItemMobile}>
                {service.icon}
                <Typography className={styles.titleMobile}>
                  {service.title}
                </Typography>
              </Box>
            ))}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ServiceClass;
