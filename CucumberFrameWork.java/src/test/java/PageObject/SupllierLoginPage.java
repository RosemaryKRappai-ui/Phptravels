package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SupllierLoginPage {
	WebDriver driver;
	@FindBy(css = "label input[name='email']")
	WebElement emailId;
	@FindBy(css = "input[name='password']")
	WebElement password;
	@FindBy(css = "button[type='submit']")
	WebElement loginButton;
	@FindBy(css = "button[class='btn btn-primary dropdown-toggle waves-effect']")
	WebElement accountButton;
	@FindBy(xpath = "//ul[@data-popper-placement='bottom-start']//child::li[5]")
	WebElement logoutButton;
	@FindBy(xpath = "div[class='message']")
	WebElement errorMessage;
	
	public SupllierLoginPage(WebDriver driver) {
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
