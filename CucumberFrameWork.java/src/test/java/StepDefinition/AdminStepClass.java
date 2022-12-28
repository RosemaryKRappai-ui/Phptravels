package StepDefinition;

import java.util.ArrayList;

import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObject.AdminFunctionPage;
import PageObject.AdminLoginPage;
import io.cucumber.java.en.*;


public class AdminStepClass extends TestBase {
	
	@Given("Admin launch the browser")
	public void admin_launch_the_browser() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Given("Admin enter the url {string}")
	public void admin_enter_the_url(String url) throws InterruptedException {
		driver.get(url);
		Thread.sleep(1000);
	}

	@When("admin enter username {string} and password {string}")
	public void admin_enter_username_and_password(String username, String passwords) {
		adminlogin = new AdminLoginPage(driver);
		adminlogin.setUsernamePassword(username, passwords);
	}

	@When("admin click login button")
	public void admin_click_login_button() {
		adminlogin.setLoginButton();
	}

	@Then("launch the admin home page")
	public void launch_the_admin_home_page() throws InterruptedException {
		Thread.sleep(3000);
		Assert.assertTrue(driver.getPageSource().contains("Dashboard"));
		
	}
	@Then("Error message will show")
	public void error_message_will_show() throws InterruptedException {
		Thread.sleep(1000);
		Assert.assertTrue(driver.getPageSource().contains("Invalid Login Credentials"));
	}
	@Then("close the admin browser")
	public void close_the_admin_browser() {
	   driver.quit();
	}
	//........................
	
	@When("Admin click on paid pyamentButton")
	public void admin_click_on_paid_pyamentButton() {
		adminfunction = new AdminFunctionPage(driver);
		adminfunction.setPaidbutton();
	}

	@Then("launch the list of paid payment")
	public void launch_the_list_of_paid_payment() {
		Assert.assertTrue(driver.getTitle().contains("paid Bookings View"));
	}

	@Then("click on Invoce")
	public void click_on_Invoce() throws InterruptedException {
		adminfunction.clickAllinvoice();
		
	}
	@Then("launch the invoiceTab")
	public void launch_the_invoiceTab() throws InterruptedException {
		adminfunction.switchtoinvoice();
		Assert.assertTrue(driver.getPageSource().contains("Booking Invoice"));
	}
//----------------------------------------------------------
	@When("Admin click on cancelled pyamentButton")
	public void admin_click_on_cancelled_pyamentButton() {
		adminfunction = new AdminFunctionPage(driver);
		adminfunction.setcancelled();
	}
	@Then("launch the list of cancelled payment")
	public void launch_the_list_of_cancelled_payment() {
		Assert.assertTrue(driver.getTitle().contains("cancelled Bookings View"));
	}
	@Then("Delete all list")
	public void delete_all_list() throws InterruptedException {
		adminfunction.deleteAllinvoice();	
	}
	@Then("check the calcell status")
	public void check_the_calcell_status() throws InterruptedException {
		Assert.assertEquals("0",adminfunction.getdeleteStatus());
	}
//-------------------------------------------------------------
	@When("Admin click on pending pyamentButton")
	public void admin_click_on_pending_pyamentButton() {
		adminfunction = new AdminFunctionPage(driver);
		adminfunction.setpendingButton();
	}
	@Then("launch the list of pending payment")
	public void launch_the_list_of_pending_payment() {
		Assert.assertTrue(driver.getTitle().contains("Pending Bookings View"));
	}
	@Then("change status pending to confirmed")
	public void change_status_pending_to_confirmed() throws InterruptedException {
	    adminfunction.setConfirmed();
	}
	@Then("check the confirmed status")
	public void check_the_confirmed_status() throws InterruptedException {
	   Assert.assertEquals("0",adminfunction.getpendingstatus());
	}
//-------------------------------------------------------------
	@When("Admin click on {string} link")
	public void admin_click_on_link(String string) throws InterruptedException {
		adminfunction = new AdminFunctionPage(driver);
		adminfunction.setwebsitelink();
	}
	@Then("redirected to different page")
	public void redirected_to_different_page() throws InterruptedException {
		ArrayList<String> newtabe = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(newtabe.get(1));
		Thread.sleep(1000);
		Assert.assertTrue(driver.getPageSource().contains(" Let’s book your next trip!"));
	}
}
