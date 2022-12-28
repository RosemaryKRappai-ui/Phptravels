package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AgentLoginPage {
	WebDriver driver;
	@FindBy(css = "input[placeholder='Email']")
	WebElement emailId;
	@FindBy(css = "input[placeholder='Password']")
	WebElement password;
	@FindBy(css = "button[class='btn btn-default btn-lg btn-block effect ladda-button waves-effect']")
	WebElement loginButton;
	@FindBy(css = "button[class='btn btn-primary dropdown-toggle waves-effect']")
	WebElement accountButton;
	@FindBy(xpath = "//ul[@data-popper-placement='bottom-start']//child::li[5]")
	WebElement logoutButton;
	@FindBy(xpath = "div[class='message']")
	WebElement errorMessage;
	
	public AgentLoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void setUsernamePassword(String username, String passwd) {
		emailId.sendKeys(username);
		password.sendKeys(passwd);
	}
	public void setLoginButton(){
		loginButton.click();
	}
}
