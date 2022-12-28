package PageObject;

import java.util.ArrayList;
import java.util.List;


import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CustomerHomePage {
	WebDriver driver;
	@FindBy(xpath = "//ul[@class='sidebar-menu list-items']//li[2]")
	WebElement myBooking;
	@FindBy(css = "ul[class='sidebar-menu list-items'] li[class='user_wallet ']")
	WebElement addFund;
	@FindBy(xpath = "//ul[@class='sidebar-menu list-items']//li[4]")
	WebElement myProfile;
	@FindBy(xpath = "//ul[@class='sidebar-menu list-items']//li[5]")
	WebElement logout;
	
	public CustomerHomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	public void setMybookig(){
		myBooking.click();
	}
	public void setAddFund(){
		addFund.click();
	}
	public void setmyProfile(){
		myProfile.click();
	}
	public void setLogout(){
		logout.click();
	}
	
	@FindBy(css = "input[id='gateway_paypal']")
	WebElement paypal;
	@FindBy(css = "input[name='price']")
	WebElement textUsd;
	@FindBy(css = "button[type='submit']")
	WebElement paybutton;
	@FindBy(css = "div[class='paypal-button-label-container'] img")
	WebElement paypalButton;
	
	public void selectpaypal() throws InterruptedException{
			Thread.sleep(3000);
	  		JavascriptExecutor js = (JavascriptExecutor) driver;
	  		js.executeScript("arguments[0].scrollIntoView();", paypal);
	  		Thread.sleep(1000);
	   	    paypal.click();
	}
	public void setpayment(int no){
				textUsd.clear();
			    textUsd.sendKeys(String.valueOf(no));
			    paybutton.click();
	}
	public String laucnhInvoice() throws InterruptedException{
		Thread.sleep(2000);
  		return driver.getTitle();
	}
	
	@FindBy(css = "input[name='address1']")
	WebElement address1;
	@FindBy(css = "input[name='address2']")
	WebElement address2;
	@FindBy(css = "button[type='submit']")
	WebElement updateButton;
	public void setaddress(String addres1,String addres2) throws InterruptedException{
		JavascriptExecutor js = (JavascriptExecutor) driver;
  		js.executeScript("arguments[0].scrollIntoView();", updateButton);
  		Thread.sleep(1000);
  		address1.clear();;
		address2.clear();;
		address1.sendKeys(addres1);
		address2.sendKeys(addres2);
		
	}
	public void setupdate() throws InterruptedException{
		JavascriptExecutor js = (JavascriptExecutor) driver;
  		js.executeScript("arguments[0].scrollIntoView();", updateButton);
  		Thread.sleep(1000);
		updateButton.click();
	}
	
	public void clickAllVoucher() throws InterruptedException {
		String oldtab = driver.getWindowHandle();
		Thread.sleep(2000);
		List<WebElement> listVoucher = driver.findElements(By.xpath("//div[@class='table-content']//a"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		for(int i=0;i<listVoucher.size();i++) {
			
			js.executeScript("arguments[0].scrollIntoView();", listVoucher.get(i));
			Thread.sleep(2000);
				listVoucher.get(i).click();	
				driver.switchTo().window(oldtab);
		}
	}
	public void switchtoVoucher() throws InterruptedException {
		ArrayList<String> newtabe = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(newtabe.get(1));
		Thread.sleep(3000);
		
	}
	
}
