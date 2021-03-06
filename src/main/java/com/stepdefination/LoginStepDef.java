package com.stepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {
	WebDriver driver;
	@Before("@login")
	public void setup(){
	 System.setProperty("webdriver.chrome.driver","D:\\chromedriver.exe");
	   driver =new ChromeDriver();
	}
	@After("@login")
	public  void  teardown(){
		driver.close();
	}
	@Given("^user should be on login page$")
	public void user_should_be_on_login_page() throws Throwable {
	   driver.get("file:///D:/Offline%20Website/Offline%20Website/index.html");	   
	}

	@When("^user enters uname and pass$")
	public void user_enters_uname_and_pass() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");
		driver.findElement(By.id("password")).sendKeys("123456");
	   
	}

	@When("^user clicks login button$")
	public void user_clicks_login_button() throws Throwable {
	  driver.findElement(By.xpath("//button")).click();
	}

	@Then("^user should be on home page$")
	public void user_should_be_on_home_page() throws Throwable {
		Assert.assertEquals(driver.getTitle(), "JavaByKiran | Dashboard");
		
	    
	}
	@Then("^user should see JBK logo$")
	public void user_should_see_JBK_logo() throws Throwable {
	   WebElement logo=driver.findElement(By.tagName("img"));
	   Assert.assertTrue(logo.isDisplayed());
	}
	
	
	
}
