package PageObject;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AgentHomePage {
	WebDriver driver;
	@FindBy(xpath = "//ul[@class='sidebar-menu list-items']//li[2]")
	WebElement myBooking;
	@FindBy(css = "ul[class='sidebar-menu list-items'] li[class='user_wallet ']")
	WebElement addFund;
	@FindBy(xpath = "//ul[@class='sidebar-menu list-items']//li[4]")
	WebElement myProfile;
	@FindBy(xpath = "//ul[@class='sidebar-menu list-items']//li[5]")
	WebElement logout;
	@FindBy(css = "div[class='header-right-action  pt-1 pe-2 multi_currency'] button")
	WebElement dropdowncurrency;
	@FindBy(xpath = "//ul[@class='dropdown-menu show']//li[7]")
	WebElement selectINR;
	
	public AgentHomePage(WebDriver driver) {
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
	public void setcurrencydropdown() throws InterruptedException {
		Thread.sleep(2000);
		dropdowncurrency.click();
	}
	public void selectinr() {
		selectINR.click();
	}
	
	@FindBy(css = "a[title='flights']")
	WebElement Flight;
	@FindBy(css = "a[title='blog']")
	WebElement blog;
	@FindBy(css = "a[title='hotels']")
	WebElement hotel;
	@FindBy(css = "a[title='tours']")
	WebElement tours;
	@FindBy(css = "a[title='visa']")
	WebElement visa;
	@FindBy(css = "a[title='offers']")
	WebElement offers;
	
	public void clickFliht(){
		Flight.click();
	}
	public void clickblog(){
		blog.click();
	}
	public void clickHotel(){
		hotel.click();
	}
	public void clicktour() throws Exception{
		
		tours.click();
		Thread.sleep(3000);
	}
	public void clickvisa(){
		visa.click();
	}
	public void clickoffers(){
		offers.click();
	}
	@FindBy(css = "span[class='selection']")
	WebElement clickcitytext;
	@FindBy(css = "input[class='select2-search__field']")
	WebElement citytext1;
	@FindBy(css = "button#submit")
	WebElement searchbutton;
	@FindBy(css = "ul[class='select2-results__options'] li")
	List<WebElement> citylist;
	
	public void setCity(String city) throws InterruptedException {
		clickcitytext.click();
		citytext1.sendKeys(city);
		Thread.sleep(2000);
		for(int i=0;i<citylist.size();i++) {
			if(citylist.get(i).getText().contains(city)) {
				citylist.get(i).click();
			}
		}
	}
	public void setsearch() {
		searchbutton.click();
	}
	
	@FindBy(css = "div[class='card-item card-item-list']")
	List<WebElement> searchresult;
	public void getsearchresult() throws InterruptedException {
		Thread.sleep(2000);
		if(searchresult.size()== 0) {
			System.out.println("NO Hotels Available here");
			Assert.assertTrue(driver.getPageSource().contains("Back To Search"));
		}
		else {
			System.out.println("Number of Availabile hotels are "+searchresult.size());
		}
	}
}
