import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import "./News.scss";
import { Fab, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const News = () => {
  const [open, setOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const staticNewsData = [
    {
      id: 1,
      title: "Название новости 1",
      image: "https://example.com/image1.jpg",
      description: "Описание новости 1",
    },
    {
      id: 2,
      title: "Название новости 2",
      image: "https://example.com/image2.jpg",
      description: "Описание новости 2",
    },
    {
      id: 3,
      title: "Название новости 3",
      image: "https://example.com/image3.jpg",
      description: "Описание новости 3",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };
  
  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleClickOpen = (staticNewsData) => {
    setSelectedNews(staticNewsData);
    setOpen(true);
  };

  return (
    <div className="news">
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        component={'div'}
      >
        <DialogTitle id="responsive-dialog-title">
          {selectedNews && selectedNews.title}
        </DialogTitle>
        <DialogContent component={'div'}>
          <DialogContentText component={'div'}>
            <div style={{ display: 'flex', justifyContent: 'center', width: "85%", height: "25vh", margin: "15px auto" }}>
              <img src={selectedNews && selectedNews.image} alt="" />
            </div>
            <DialogContentText className="selected-descr">
              {selectedNews && selectedNews.description}
            </DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions component={'div'}>
          <Button onClick={handleClose} autoFocus>
            Назад
          </Button>
        </DialogActions>
      </Dialog>
      <h2 className="news-news">news</h2>
      <Box sx={{ position: "relative" }}>
        <Fab
          sx={{
            position: "absolute",
            zIndex: "2",
            left: "5px",
            float: "left",
            top: "180px", backgroundColor: "#FF800F", color: "#fff"
          }}
          onClick={prev}
        >
          <ArrowBackIosNewIcon />
        </Fab>

        <Fab
          sx={{
            position: "absolute",
            zIndex: "2",
            right: "-20px",
            float: "right",
            top: "180px", backgroundColor: "#FF800F", color: "#fff"
          }}
          onClick={next}
        >
          <ArrowForwardIosIcon />
        </Fab>
        <Slider {...settings} ref={sliderRef}>
          {staticNewsData.map((news) => (
            <div key={news.id} className="example-2 news-card wow fadeInLeft">
              <div
                className="news-wrapper"
                style={{
                  background: `url(${news.image}) center / cover no-repeat`,
                }}
              >
                <div className="news-data">
                  <div className="news-content">
                    <span className="news-author">By Ventstroy</span>
                    <h1 className="news-title" onClick={() => handleClickOpen(news)}>
                      {news.title}
                    </h1>
                    <Link to="#" onClick={() => handleClickOpen(news)} className="news-button">
                      read
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default News;
