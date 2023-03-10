package StepDefinition;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/",
glue={"StepDefinition"},
monochrome = true, plugin = {"pretty","junit:src/target/JUnitlReports"} )
//  html:src/target/HtmlReports
//  json:src/target/JSONReports
//	junit:src/target/JUnitlReports
public class TestRunner {

}
