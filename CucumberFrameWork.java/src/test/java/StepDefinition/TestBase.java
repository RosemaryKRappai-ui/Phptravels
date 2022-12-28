package StepDefinition;

import org.openqa.selenium.WebDriver;

import PageObject.AdminFunctionPage;
import PageObject.AdminLoginPage;
import PageObject.AgentHomePage;
import PageObject.AgentLoginPage;
import PageObject.CustomerHomePage;
import PageObject.CustomerLoginpage;
import PageObject.SupllierHomePage;
import PageObject.SupllierLoginPage;

public class TestBase {
	public WebDriver driver;
	public CustomerLoginpage loginpage;
	public CustomerHomePage customerHome;
	public AdminLoginPage adminlogin;
	public AdminFunctionPage  adminfunction;
	public AgentLoginPage agentlogin;
	public AgentHomePage agenthome;
	public SupllierLoginPage supllierlogon;
	public SupllierHomePage supllierhome;
}
