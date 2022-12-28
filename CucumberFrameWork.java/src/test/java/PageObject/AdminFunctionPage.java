package PageObject;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;


public class AdminFunctionPage {
	WebDriver driver;
	@FindBy(xpath = "//div[@class='row gx-3']//div[4]//a")
	WebElement paidButton;
	@FindBy(xpath = "//div[@class='row gx-3']//div[3]//a")
	WebElement cancelledButton;
	@FindBy(xpath = "//div[@class='row gx-3']//div[2]//a")
	WebElement pendingButton;
	@FindBy(xpath = "//ul[@class='navbar-nav d-none d-lg-flex']//li[1]//a")
	WebElement websiteLink;
	@FindBy(xpath = "//button[@class='btn btn-danger mdc-ripple-upgraded'][1]")
	WebElement DeleteButton;
	@FindBy(xpath = "//div[@class='row gx-3']//div[3]//div[@class='display-5']")
	WebElement Deletestatus;
	@FindBy(xpath = "//div[@class='row gx-3']//div[2]//div[@class='display-5']")
	WebElement pendingstatus;
	
	public AdminFunctionPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void setPaidbutton() {
		paidButton.click();
	}
	public void clickAllinvoice() throws InterruptedException {
		Thread.sleep(2000);
		List<WebElement> invoiceList = driver.findElements(By.xpath("//a[@style='cursor: pointer;']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement table = driver.findElement(By.cssSelector("table[class='table table-bordered table-hover mb-0 dataTable no-footer']"));
		js.executeScript("arguments[0].scrollIntoView();", table);
		for(int i=0;i<invoiceList.size();i++) {	
			Thread.sleep(1000);
			invoiceList.get(i).click();	
		}
	}
	public void switchtoinvoice() throws InterruptedException {
		ArrayList<String> newtabe = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(newtabe.get(1));
		Thread.sleep(3000);
		
	}
	//--------------------------------------------
	public void setcancelled() {
		cancelledButton.click();
	}
	public void deleteAllinvoice() throws InterruptedException {
		Thread.sleep(2000);
		List<WebElement> invoiceList = driver.findElements(By.cssSelector("button[class='btn btn-danger mdc-ripple-upgraded'"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement table = driver.findElement(By.cssSelector("div[class='panel panel-default']"));
		js.executeScript("arguments[0].scrollIntoView();", table);
		//invoiceList.size()
		for(int i=0;i<invoiceList.size();i++) {	
			Thread.sleep(1000);
			DeleteButton.click();	
			Alert alert = driver.switchTo().alert();
			alert.accept();
		}
	}
	public String getdeleteStatus() throws InterruptedException {
		Thread.sleep(1000);
		return Deletestatus.getText();
	}
	//-----------------------------------------------------------------
	@FindBy (xpath = "//select[@class='form-select status pending'][1]")
	WebElement selectConfirmeddrop;
	
	public void setpendingButton() {
		pendingButton.click();
	}
	public void setConfirmed() throws InterruptedException {
		Thread.sleep(2000);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement table = driver.findElement(By.cssSelector("table[class='table table-bordered table-hover mb-0 dataTable no-footer']"));
		js.executeScript("arguments[0].scrollIntoView();", table);	
		List<WebElement> invoiceList = driver.findElements(By.cssSelector("select[class='form-select status pending']"));
		for(int i=0;i<invoiceList.size();i++) {	
			Thread.sleep(2000);
			selectConfirmeddrop.click();
			Select select= new Select(selectConfirmeddrop);	
			select.selectByVisibleText("Confirmed");	
		}
	}
	public String getpendingstatus() throws InterruptedException {
		Thread.sleep(1000);
		return pendingstatus.getText();
	}
	//-------------------------------------------------------
	public void setwebsitelink() throws InterruptedException {
		websiteLink.click();
		Thread.sleep(2000);
	}
}
