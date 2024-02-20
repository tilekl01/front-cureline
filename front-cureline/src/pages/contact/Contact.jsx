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
							<iframe className='contact-iframe' src="https://yandex.ru/maps/10309/bishkek/house/Y00YcAdgSUIFQFpofXR1dX1hbQ==/?from=mapframe&ll=74.600071%2C42.844129&z=17" width="100%" height="100%"></iframe>
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