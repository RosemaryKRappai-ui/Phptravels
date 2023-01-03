package PageObject;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class SupllierHomePage {
	WebDriver driver;

	@FindBy(css = "div[class='text-muted']")
	WebElement labelsales;
	@FindBy(xpath = "//canvas[@id='dashboardBarChart']")
	WebElement revenuechart;

	public SupllierHomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public String dispalyText() {
		return labelsales.getText();
	}

	public void displayrevenue() {
		Assert.assertTrue(driver.getPageSource().contains("Revenue Breakdown 2022"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView();", revenuechart);
	}

//--------------------------------------------------------------
	@FindBy(xpath = "//div[@class='row gx-3']//div[2]//a")
	WebElement pendingButton;
	@FindBy(xpath = "//select[@class='form-select status pending'][1]")
	WebElement selectConfirmeddrop;
	@FindBy(xpath = "//div[@class='row gx-3']//div[2]//div[@class='display-5']")
	WebElement pendingstatus;
	@FindBy(css = "div[class='text-uppercase font-monospace']")
	WebElement dashbord;
	public void setpendingButton() throws InterruptedException {
		Thread.sleep(2000);
		pendingButton.click();
	}

	public void setConfirmed() throws InterruptedException {
		Thread.sleep(2000);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement table = driver.findElement(
				By.cssSelector("table[class='table table-bordered table-hover mb-0 dataTable no-footer']"));
		js.executeScript("arguments[0].scrollIntoView();", table);
		List<WebElement> invoiceList = driver
				.findElements(By.cssSelector("select[class='form-select status pending']"));
		// invoiceList.size()
		for (int i = 0; i < invoiceList.size(); i++) {
			Thread.sleep(2000);
			selectConfirmeddrop.click();
			Select select = new Select(selectConfirmeddrop);
			select.selectByVisibleText("Confirmed");
		}
	}

	public String getpendingstatus() throws InterruptedException {
		
		dashbord.click();
		Thread.sleep(2000);
		return pendingstatus.getText();
	}

	// -------------------------------------------------------------

	@FindBy(css = "a[aria-controls='carsmodule']")
	WebElement carLink;
	@FindBy(css = "a[aria-controls='hotelsmodule']")
	WebElement hotelLink;
	@FindBy(css = "a[aria-controls='toursmodule']")
	WebElement toursLink;
	@FindBy(css = "a[aria-controls='flightsmodule']")
	WebElement flightLink;
	@FindBy(css = "a[aria-controls='visamodule']")
	WebElement visaLink;
	@FindBy(css = "a[class='loadeffect nav-link collapsed mdc-ripple-upgraded']")
	WebElement bookingLink;

	public void setCarLInk() throws InterruptedException {
		Thread.sleep(3000);
		carLink.click();
	}

	public void sethotelLink() {
		hotelLink.click();
	}

	public void setToursLInk() {
		toursLink.click();
	}

	public void setBookingLInk() {
		bookingLink.click();
	}
	public void setFlightLInk() {
		flightLink.click();
	}
	public void setVisaLInk() {
		visaLink.click();
	}
}
