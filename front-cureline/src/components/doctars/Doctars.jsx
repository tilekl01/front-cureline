import React,{useState} from 'react'
import '../doctars/Doctars.css'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Doctars = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [selectedNews, setSelectedNews] = useState(null);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  


  const handleClose = () => {
    setOpen(false);
  };


  const handleClickOpen = (news) => {
    setSelectedNews(news);
    setOpen(true);
  };

  const news = [
    {
      id: 1,
      title: 'Static News Title 1',
      description: 'Static description for News 1',
      image: 'https://ticket.kg/images/items/kyrgyz-stand-up1707310492.png', // Replace with actual image path
    },
    // ... more static news items
  ];
  return (
    <div > 
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        component={'div'}
      >
        <DialogTitle id="responsive-dialog-title">
        <h2 className='title_sub'>Обратный звонок</h2>
        </DialogTitle>
        <DialogContent component={'div'}>
          <DialogContentText component={'div'}>
          <div class="callback-form">
  <p>Представьтесь, мы вам перезвоним.</p>
  <form action="/submit-callback" method="post" className='callbacksub'/>
    <input type="text" name="name" placeholder="Ваше имя: *" required/>
    <input type="tel" name="phone" placeholder="Телефон: *" required/>
    <input type="des" name="text" placeholder="" required/>
    <input type="submit" value="Отправить"/>
  
</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions component={'div'}>
          <Button onClick={handleClose} autoFocus>
            Назад
          </Button>
        </DialogActions>
      </Dialog>
      <h4 style={{display: 'flex', justifyContent: 'center', padding: '40px 20px', fontSize:'36px'}}>Наши содрудники</h4>
    <div className="card-container">
     
    <div className="card_doctars">
    <div className="card-content">
    <a href='/infodoctar'>
        <div className="name" >Жолдошев Омурбек Бахридинович</div>
      </a>
      <div className="title">Медицинский директор, рефракционный офтальмохирург, врач первой квалификационной категории, член ESCRS</div>
      <Link to="#" onClick={() => handleClickOpen(news)} className="button_doc">
      Записаться
      </Link>

    </div>
    <img src="https://olc.kg/wp-content/uploads/2023/07/zholdoshev_500px.png" alt="Doctor"/>
  </div>
  <div className="card_doctars">
    <div className="card-content">
    <a href='/infodoctar'>
        <div className="name" >Жолдошев Омурбек Бахридинович</div>
      </a>
      <div className="title">Медицинский директор, рефракционный офтальмохирург, врач первой квалификационной категории, член ESCRS</div>
      <a href="appointment_link" className="button_doc">Записаться</a>
      
    </div>
    <img src="https://olc.kg/wp-content/uploads/2023/07/zholdoshev_500px.png" alt="Doctor"/>
  </div>
  <div className="card_doctars">
    <div className="card-content">
    <a href='/infodoctar'>
        <div className="name" >Жолдошев Омурбек Бахридинович</div>
      </a>
      <div className="title">Медицинский директор, рефракционный офтальмохирург, врач первой квалификационной категории, член ESCRS</div>
      <a href="appointment_link" className="button_doc">Записаться</a>
      
    </div>
    <img src="https://olc.kg/wp-content/uploads/2023/07/zholdoshev_500px.png" alt="Doctor"/>
  </div>


</div>
{/* <MantineProvider>
  <FaqSimple/>
</MantineProvider> */}

</div>
  )
}

export default Doctars

