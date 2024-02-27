import React from 'react'
import '../contact/Contact.css'


const Contact = () => {
  return (
    <div>
		<h1 className='contact'>Контакты</h1>
        <section class="contact-us section" >
			<div class="container">
				<div class="inner">
					<div class="row"> 
						<div class="col-lg-6">
							<div class="contact-us-left">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.3589085554954!2d74.59866269357235!3d42.84415421954023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb75b0941713d%3A0xe25c88f74c059a30!2sSalymbekov%20Business%20School!5e0!3m2!1sru!2skg!4v1708922877929!5m2!1sru!2skg" width="550" height="550" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="contact-us-form">
								<h2>Contact With Us</h2>
								<p>If you have any questions please fell free to contact with us.</p>
								<form class="form" method="post" action="mail/mail.php">
									<div class="row">
										<div class="col-lg-6">
											<div class="form-group">
												<input type="text" name="name" placeholder="Name" required=""/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input type="email" name="email" placeholder="Email" required=""/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input type="text" name="phone" placeholder="Phone" required=""/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input type="text" name="subject" placeholder="Subject" required=""/>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-group">
												<textarea name="message" placeholder="Your Message" required=""></textarea>
											</div>
										</div>
										<div class="col-12">
											<div class="form-group login-btn">
												<button class="btn" type="submit">Send</button>
											</div>
											<div class="checkbox">
												<label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox"/>Do you want to subscribe our Newsletter ?</label>
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