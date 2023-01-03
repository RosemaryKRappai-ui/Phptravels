$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/adminfunctions.feature");
formatter.feature({
  "name": "To test Admin functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Admin change the status pending to confirmed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter the url \"https://phptravels.net/api/admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enter username \"admin@phptravels.com\" and password \"demoadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the admin home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_admin_home_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"String.contains(java.lang.CharSequence)\" because the return value of \"org.openqa.selenium.WebDriver.getPageSource()\" is null\r\n\tat StepDefinition.AdminStepClass.launch_the_admin_home_page(AdminStepClass.java:41)\r\n\tat ✽.launch the admin home page(file:///D:/01rose_trainingdocument/Cucumber/CucumberFrameWork.java/src/test/resources/Features/adminfunctions.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin click on pending pyamentButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_on_pending_pyamentButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "launch the list of pending payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_list_of_pending_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "change status pending to confirmed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.change_status_pending_to_confirmed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check the confirmed status",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.check_the_confirmed_status()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the admin browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.close_the_admin_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Display booking invoice where payment is successfull.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter the url \"https://phptravels.net/api/admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_the_url(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bfabce9e62ba81dff6bedb81f3590686, get {url\u003dhttps://phptravels.net/api/admin}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\JINTOS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58493}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58493/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bfabce9e62ba81dff6bedb81f3590686\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:565)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat StepDefinition.AdminStepClass.admin_enter_the_url(AdminStepClass.java:23)\r\n\tat ✽.Admin enter the url \"https://phptravels.net/api/admin\"(file:///D:/01rose_trainingdocument/Cucumber/CucumberFrameWork.java/src/test/resources/Features/adminfunctions.feature:16)\r\nCaused by: java.io.UncheckedIOException: java.net.SocketException: Connection reset\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:73)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:99)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat StepDefinition.AdminStepClass.admin_enter_the_url(AdminStepClass.java:23)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.net.SocketException: Connection reset\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.throwConnectionReset(SocketChannelImpl.java:394)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:426)\r\n\tat io.netty.buffer.PooledByteBuf.setBytes(PooledByteBuf.java:259)\r\n\tat io.netty.buffer.AbstractByteBuf.writeBytes(AbstractByteBuf.java:1132)\r\n\tat io.netty.channel.socket.nio.NioSocketChannel.doReadBytes(NioSocketChannel.java:357)\r\n\tat io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:151)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:788)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "admin enter username \"admin@phptravels.com\" and password \"demoadmin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "launch the admin home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_admin_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin click on paid pyamentButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_click_on_paid_pyamentButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "launch the list of paid payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.launch_the_list_of_paid_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Invoce",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.click_on_Invoce()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the admin browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.close_the_admin_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Admin Delete the cancelled pyment",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.AdminStepClass.admin_launch_the_browser()"
});
