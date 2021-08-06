package com.stepdefination;

import java.util.ArrayList;
import java.util.List;

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

public class DashboardStepdefination {
	
	WebDriver driver;
	ArrayList<String>actualcourseName;
	@Before("@dash")
	public void setup(){
		System.setProperty("webdriver.chrome.driver","D:\\chromedriver.exe");
		driver =new ChromeDriver();
	}
	@After("@dash")
	public  void  teardown(){
		driver.close();
	}


	@Given("^user should be on login dashboard page$")
	public void user_should_be_on_login_dashboard_page() throws Throwable {
		driver.get("file:///D:/Offline%20Website/Offline%20Website/index.html");	
		driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");
		driver.findElement(By.id("password")).sendKeys("123456");
		driver.findElement(By.xpath("//button")).click();
		driver.get("file:///D:/Offline%20Website/Offline%20Website/pages/examples/dashboard.html");

	}

	@When("^user will create a list of courses$")
	public void user_will_create_a_list_of_courses() throws Throwable {
		List<WebElement> courses=driver.findElements(By.tagName("h3"));
		actualcourseName=new ArrayList<String>();
		for (WebElement e : courses) {
			actualcourseName.add(e.getText());
		}

	}

	@Then("^user verify the courses with expected$")
	public void user_verify_the_courses_with_expected() throws Throwable {
		ArrayList<String>expeccourseName=new ArrayList<String>();
		expeccourseName.add("Selenium");
		expeccourseName.add("Java / J2EE");
		expeccourseName.add("Python");
		expeccourseName.add("Php");
		Assert.assertEquals(expeccourseName, actualcourseName);


	}


}
