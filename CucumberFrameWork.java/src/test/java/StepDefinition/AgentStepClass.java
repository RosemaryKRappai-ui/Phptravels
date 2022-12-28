package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObject.AgentHomePage;
import PageObject.AgentLoginPage;
import io.cucumber.java.en.*;

public class AgentStepClass extends TestBase {
	@Given("agent launch the browser")
	public void agent_launch_the_browser() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	@Given("agent enter the url {string}")
	public void agent_enter_the_url(String url) throws InterruptedException {
		driver.get(url);
		Thread.sleep(1000);
	}
	@When("agent enter username {string} and password {string}")
	public void agent_enter_username_and_password(String username, String passwords) {
		agentlogin = new AgentLoginPage(driver);
		agentlogin.setUsernamePassword(username, passwords);
	}
	@When("agent click login button")
	public void agent_click_login_button() {
	   agentlogin.setLoginButton();
	}
	@Then("agent login to successfully")
	public void agent_login_to_successfully() {
		Assert.assertTrue(driver.getPageSource().contains("Welcome Back"));
	}
	@Then("error message display")
	public void error_message_display() throws InterruptedException {
		Thread.sleep(1000);
		Assert.assertTrue(driver.getPageSource().contains("Wrong credentials. try again!"));
	}
	@Then("agent close the browser")
	public void agent_close_the_browser() {
		driver.quit();
	}
//-----------------------------------------------------
	
	@When("click on USD drop down")
	public void click_on_USD_drop_down() throws InterruptedException {
		agenthome.setcurrencydropdown();
	}

	@Then("select INR")
	public void select_INR() {
	   agenthome.selectinr();
	}
//-----------------------------------------------------
	@When("click on Hotel Link")
	public void click_on_Hotel_Link() {
		agenthome = new AgentHomePage(driver);
		agenthome.clickHotel();
	}
	@Then("launch the Hotel page")
	public void launch_the_Hotel_page() {
		Assert.assertTrue(driver.getPageSource().contains("Featured Hotels"));
	}
	@When("enter the city {string}")
	public void enter_the_city(String city) throws InterruptedException {
		agenthome.setCity(city);
		agenthome.setsearch();
	}

	@Then("Display list of results")
	public void display_list_of_results() throws InterruptedException {
		agenthome.getsearchresult();
	}

	
//---------------------------------------------------
	@Then("click on Flight Link")
	public void click_on_Flight_Link() {
		agenthome = new AgentHomePage(driver);
		agenthome.clickFliht();
	}

	@Then("launch the Flight page")
	public void launch_the_Flight_page() {
		Assert.assertTrue(driver.getPageSource().contains("SEARCH FOR BEST FLIGHTS"));
	}
//---------------------------------------------------
	@Then("click on Tours Link")
	public void click_on_Tours_Link() throws Exception {
		agenthome = new AgentHomePage(driver);
		agenthome.clicktour();
	}

	@Then("launch the Tours page")
	public void launch_the_Tours_page() {
		Assert.assertTrue(driver.getPageSource().contains("Find the best tours packages"));
	}

	@Then("click on visa Link")
	public void click_on_visa_Link() {
		agenthome = new AgentHomePage(driver);
		agenthome.clickvisa();
	}

	@Then("launch the visa page")
	public void launch_the_visa_page() {
		Assert.assertTrue(driver.getPageSource().contains("Submit Your Visa Today!"));
	}

	@Then("click on Blog Link")
	public void click_on_Blog_Link() {
		agenthome = new AgentHomePage(driver);
		agenthome.clickblog();
	}

	@Then("launch the Blog page")
	public void launch_the_Blog_page() {
		Assert.assertTrue(driver.getPageSource().contains("PHPTRAVELS Blog"));
	}

	@Then("click on Offers Link")
	public void click_on_Offers_Link() {
		agenthome = new AgentHomePage(driver);
		agenthome.clickoffers();
	}

	@Then("launch the Offers page")
	public void launch_the_Offers_page() {
		Assert.assertTrue(driver.getPageSource().contains("PHPTRAVELS Offers"));
	}

	
// -----------------------------------------------------------------------
	@When("click on my Booking")
	public void click_on_my_Booking() {
		agenthome = new AgentHomePage(driver);
		agenthome.setMybookig();
	}
	@Then("launch the My Bookings")
	public void launch_the_My_Bookings() {
		Assert.assertTrue(driver.getPageSource().contains("My Bookings"));
	}

	@Then("click on AddFund")
	public void click_on_AddFund() {
		agenthome = new AgentHomePage(driver);
	   agenthome.setAddFund();
	}

	@Then("launch the AddFund")
	public void launch_the_AddFund() {
		Assert.assertTrue(driver.getPageSource().contains("Payment Method")); 
	}

	@Then("click on My profile")
	public void click_on_My_profile() {
	   agenthome.setmyProfile();
	}

	@Then("launch the My profile")
	public void launch_the_My_profile() {
		Assert.assertTrue(driver.getPageSource().contains("Profile Information"));
	}

	@Then("click on Logout")
	public void click_on_Logout() {
	    agenthome.setLogout();
	}

	@Then("launch the Loginpage")
	public void launch_the_Loginpage() {
		Assert.assertTrue(driver.getPageSource().contains("Please enter your account credentials below"));
	}
}
