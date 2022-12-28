package StepDefinition;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/customerlogin.feature",
glue={"StepDefinition"},
monochrome = true, plugin = {"pretty","html:src/target/HtmlReports"} )
//  html:src/target/HtmlReports
//  JSON:src/target/JSONReports
//	JUnit:src/target/JUnitlReports
public class TestRunner {
	
	
}
