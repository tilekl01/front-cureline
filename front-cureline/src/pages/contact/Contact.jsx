import React from 'react'
import '../contact/Contact.css'


const Contact = () => {
  return (
    <div>
		<h1 className='contact' style={{paddingTop:'30px'}}>Контакты</h1>
        <section className="contact-us section" >
			<div className="container">
				<div className="inner">
					<div className="row"> 
						<div className="col-lg-6">
							<div className="contact-us-left">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.3589085554954!2d74.59866269357235!3d42.84415421954023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb75b0941713d%3A0xe25c88f74c059a30!2sSalymbekov%20Business%20School!5e0!3m2!1sru!2skg!4v1708922877929!5m2!1sru!2skg" width="100%" height="600px" style={{border:'0'}}  loading="lazy" ></iframe>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="contact-us-form">
								<h2>Contact With Us</h2>
								<p>If you have any questions please fell free to contact with us.</p>
								<form className="form" method="post" action="mail/mail.php">
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="name" placeholder="Name" required=""/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="email" name="email" placeholder="Email" required=""/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="phone" placeholder="Phone" required=""/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="subject" placeholder="Subject" required=""/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<textarea name="message" placeholder="Your Message" required=""></textarea>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group login-btn">
												<button className="btn" type="submit">Send</button>
											</div>
											<div className="checkbox">
												<label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox"/>Do you want to subscribe our Newsletter ?</label>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default Contact