package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObject.AdminLoginPage;
import PageObject.SupllierHomePage;
import PageObject.SupllierLoginPage;
import io.cucumber.java.en.*;

public class SupllierStepClass extends TestBase{

	@Given("Supllier launch the browser")
	public void supllier_launch_the_browser() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Given("Supllier enter the url {string}")
	public void supllier_enter_the_url(String url) throws InterruptedException {
		driver.get(url);
		Thread.sleep(1000);
	}

	@When("Supllier enter username {string} and password {string}")
	public void supllier_enter_username_and_password(String username, String passwords) {
		supllierlogon = new SupllierLoginPage(driver);
		supllierlogon.setUsernamePassword(username, passwords);
	}
	@When("Supllier click login button")
	public void supllier_click_login_button() {
		supllierlogon.setLoginButton();
	}
	@Then("launch the Supllier home page")
	public void launch_the_Supllier_home_page() throws InterruptedException {
		Thread.sleep(3000);
		Assert.assertTrue(driver.getPageSource().contains("Dashboard"));
	}
	@Then("close the Supllier browser")
	public void close_the_Supllier_browser() {
	    driver.quit();
	}
	@Then("Display error message")
	public void supllier_message_will_show() throws InterruptedException {
		Thread.sleep(2000);
		Assert.assertTrue(driver.getPageSource().contains("Invalid Login Credentials"));
	}
// ----------------------------------------------------------	
	@Then("launch the Supllier Dashboard")
	public void launch_the_Supllier_Dashboard() throws InterruptedException {
		Thread.sleep(3000);
		Assert.assertTrue(driver.getPageSource().contains("Dashboard"));
	}

	@Then("check the text {string}")
	public void check_the_text(String string) throws InterruptedException {
		supllierhome = new SupllierHomePage(driver);	
		Assert.assertEquals(string,supllierhome.dispalyText());
	}
// ----------------------------------------------------------
	@Then("check the text Revenue Breakdown")
	public void check_the_text_Revenue_Breakdown() {
		supllierhome = new SupllierHomePage(driver);
		supllierhome.displayrevenue();
	}
// ----------------------------------------------------------
	@When("Supplier click on Pending status")
	public void supplier_click_on_Pending_status() throws InterruptedException {
		supllierhome = new SupllierHomePage(driver);
		supllierhome.setpendingButton();
	}

	@Then("Launch the pending list")
	public void launch_the_pending_list() {
		Assert.assertTrue(driver.getTitle().contains("Pending Bookings View"));
	}

	@Then("change the pending to confirmed status")
	public void change_the_pending_to_confirmed_status() throws InterruptedException {
		supllierhome.setConfirmed();
	}

	@Then("check the status count in DashBoard")
	public void check_the_status_count_in_DashBoard() throws InterruptedException {	
		Assert.assertEquals("0",supllierhome.getpendingstatus());	
	}
// --------------------------------------------------------------------------------
	@When("Supllier click on Car Link")
	public void supllier_click_on_Flight_Link() throws InterruptedException {
		supllierhome = new SupllierHomePage(driver);
		supllierhome.setCarLInk();
	}
	@Then("Supllier click on Tours Link")
	public void supllier_click_on_Tours_Link() {
		supllierhome.setToursLInk();
	}
	@Then("Supllier  click on Hotel Link")
	public void supllier_click_on_visa_Link() {
	    supllierhome.sethotelLink();
	}
	@Then("click on Booking Link")
	public void click_on_Booking_Link() {
		supllierhome.setBookingLInk();
	}
}
