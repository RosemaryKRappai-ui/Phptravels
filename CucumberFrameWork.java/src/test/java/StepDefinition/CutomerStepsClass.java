package StepDefinition;

import java.io.IOException;
import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObject.CustomerHomePage;
import PageObject.CustomerLoginpage;
import Utilities.ExcelUtility;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CutomerStepsClass extends TestBase {
			
	@Given("user launch the browser")
	public void user_launch_the_browser() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Given("enter the url {string}")
	public void enter_the_url(String url) throws InterruptedException {
		driver.get(url);
		Thread.sleep(1000);
	}

	@When("USER enter username {string} and password {string}")
	public void user_enter_username_and_password(String username, String passwords) {
		loginpage = new CustomerLoginpage(driver);
		loginpage.setUsernamePassword(username, passwords);
	}

	@And("click login button")
	public void click_login_button() throws InterruptedException {
		loginpage.setLoginButton();
	}

	@Then("login to successfully and logout")
	public void logout_to_success_fully() {
		Assert.assertTrue(driver.getPageSource().contains("Welcome Back"));
		
	}

	@Then("error message will show")
	public void error_message_will_show() throws InterruptedException {
		Thread.sleep(1000);
		Assert.assertTrue(driver.getPageSource().contains("Wrong credentials. try again!"));
		
	}

	@Then("close the browser")
	public void close_the_browser() {
		driver.quit();
	}
//-----------------------------------------------------CUSTOMER LINKS
	
	@Given("User enter valid username {string} and password {string}")
	public void user_enter_valid_username_and_password(String username, String passwords) throws InterruptedException {
		loginpage = new CustomerLoginpage(driver);
		loginpage.setUsernamePassword(username, passwords);
		loginpage.setLoginButton();
		Thread.sleep(1000);
	}
	@When("click on My Booking")
	public void click_on_My_Booking() {
		customerHome = new CustomerHomePage(driver);
		customerHome.setMybookig();
	}
	@Then("launch the Mybooking page")
	public void launch_the_Mybooking_page() {
		Assert.assertTrue(driver.getPageSource().contains("My Bookings"));
	}

	@When("click on Add Funds")
	public void click_on_Add_Funds() {
		customerHome = new CustomerHomePage(driver);
	   customerHome.setAddFund();
	}

	@Then("launch the Add Funds")
	public void launch_the_Add_Funds() {
		Assert.assertTrue(driver.getPageSource().contains("Payment Method")); 
	}

	@When("click on My Profile")
	public void click_on_My_Profile() {
		customerHome = new CustomerHomePage(driver);
	  customerHome.setmyProfile();
	}

	@Then("launch the My Profile")
	public void launch_the_My_Profile() {
		Assert.assertTrue(driver.getPageSource().contains("Profile Information"));
	}

	@When("click Logout")
	public void click_Logout() {
		customerHome = new CustomerHomePage(driver);
		customerHome.setLogout();
	}

	@Then("launch the Login page")
	public void launch_the_Login_page() {
		Assert.assertTrue(driver.getPageSource().contains("Please enter your account credentials below"));
	}
	//--------------------Customer activity
	@When("click on voucher")
	public void click_on_voucher() throws InterruptedException {	
		customerHome.clickAllVoucher();
	}
	@Then("launch the voucher")
	public void launch_the_voucher() throws InterruptedException {
		customerHome.switchtoVoucher();
		Assert.assertTrue(driver.getPageSource().contains("Booking Invoice"));
		driver.quit();
	}
	//----------------------------------------
	@When("select paypal")
	public void select_paypal() throws InterruptedException {
		
		customerHome.selectpaypal();
	}
	@When("select textfield enter {int} USD and click on pay")
	public void select_textfield_enter_USD_and_click_on_pay(Integer usd) {
		customerHome.setpayment(usd);
	}
	@Then("launch the Invoice")
	public void launch_the_Invoice() throws InterruptedException {
				String expectedtitile ="Payment with paypal";
				Assert.assertEquals(expectedtitile,customerHome.laucnhInvoice());
	}
	//-----------------------------------------
	@When("select Address text field")
	public void select_Address_text_field() throws InterruptedException, IOException {
		customerHome.setaddress(ExcelUtility.getCellData(1, 0),ExcelUtility.getCellData(1, 1));
	}
	@When("enter updated address")
	public void enter_updated_address() throws InterruptedException {
	   customerHome.setupdate();
	}
	@Then("click update button and success message will show")
	public void click_update_button_and_success_message_will_show() {
		Assert.assertTrue(driver.getPageSource().contains("Profile updated successfully."));
	}
}
