$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Timesheet.feature");
formatter.feature({
  "name": "To automate the Online Timesheet",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UITest"
    }
  ]
});
formatter.scenario({
  "name": "To create a New User in the application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UITest"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Open browser and navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.HomePage.open_browser_and_navigate_to_the_Url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Error forwarding the new session Request timed out waiting for a node to become available.\nCommand duration or timeout: 604.02 seconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat StepDef.DriverSetup.getGridChromeDriver(DriverSetup.java:45)\r\n\tat StepDef.LibraryFunctions.setBrowser(LibraryFunctions.java:28)\r\n\tat StepDef.HomePage.open_browser_and_navigate_to_the_Url(HomePage.java:20)\r\n\tat ✽.Open browser and navigate to the Url(file:///D:/AutomationQ/src/test/resources/Features/Timesheet.feature:5)\r\nCaused by: org.openqa.selenium.WebDriverException: Error forwarding the new session Request timed out waiting for a node to become available.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-37FF92FG\u0027, ip: \u0027192.168.10.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.grid.web.servlet.handler.RequestHandler.process(RequestHandler.java:118)\r\n\tat org.openqa.grid.web.servlet.DriverServlet.process(DriverServlet.java:85)\r\n\tat org.openqa.grid.web.servlet.DriverServlet.doPost(DriverServlet.java:69)\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:707)\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:790)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHolder.handle(ServletHolder.java:865)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1655)\r\n\tat io.prometheus.client.filter.MetricsFilter.doFilter(MetricsFilter.java:170)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1642)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHandler.doHandle(ServletHandler.java:533)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.handle(ScopedHandler.java:146)\r\n\tat org.seleniumhq.jetty9.security.SecurityHandler.handle(SecurityHandler.java:548)\r\n\tat org.seleniumhq.jetty9.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:257)\r\n\tat org.seleniumhq.jetty9.server.session.SessionHandler.doHandle(SessionHandler.java:1595)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:255)\r\n\tat org.seleniumhq.jetty9.server.handler.ContextHandler.doHandle(ContextHandler.java:1340)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextScope(ScopedHandler.java:203)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHandler.doScope(ServletHandler.java:473)\r\n\tat org.seleniumhq.jetty9.server.session.SessionHandler.doScope(SessionHandler.java:1564)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextScope(ScopedHandler.java:201)\r\n\tat org.seleniumhq.jetty9.server.handler.ContextHandler.doScope(ContextHandler.java:1242)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.handle(ScopedHandler.java:144)\r\n\tat org.seleniumhq.jetty9.server.handler.StatisticsHandler.handle(StatisticsHandler.java:174)\r\n\tat org.seleniumhq.jetty9.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\r\n\tat org.seleniumhq.jetty9.server.Server.handle(Server.java:503)\r\n\tat org.seleniumhq.jetty9.server.HttpChannel.handle(HttpChannel.java:364)\r\n\tat org.seleniumhq.jetty9.server.HttpConnection.onFillable(HttpConnection.java:260)\r\n\tat org.seleniumhq.jetty9.io.AbstractConnection$ReadCallback.succeeded(AbstractConnection.java:305)\r\n\tat org.seleniumhq.jetty9.io.FillInterest.fillable(FillInterest.java:103)\r\n\tat org.seleniumhq.jetty9.io.ChannelEndPoint$2.run(ChannelEndPoint.java:118)\r\n\tat org.seleniumhq.jetty9.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:765)\r\n\tat org.seleniumhq.jetty9.util.thread.QueuedThreadPool$2.run(QueuedThreadPool.java:683)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "In the HomePage Enter the valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.HomePage.in_the_HomePage_Enter_the_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to Login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.user_should_be_able_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the user is able to login successfully",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.HomePage.verify_the_user_is_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Employee Details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.click_on_Employee_Details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create a new user by clicking on the link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.HomePage.create_a_new_user_by_clicking_on_the_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Fill the details and create the user",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.check_Verify_the_new_user_Page_is_Displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Message displayed Employee Details saved sucessfully",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.HomePage.message_displayed_Employee_Details_saved_sucessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will navigate to logout",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.user_will_navigate_to_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Message displayed You have been logged out",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.HomePage.message_displayed_You_have_been_logged_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Update details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UITest"
    },
    {
      "name": "@riya"
    }
  ]
});
formatter.step({
  "name": "Open browser and navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.HomePage.open_browser_and_navigate_to_the_Url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Error forwarding the new session Request timed out waiting for a node to become available.\nCommand duration or timeout: 600.89 seconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat StepDef.DriverSetup.getGridChromeDriver(DriverSetup.java:45)\r\n\tat StepDef.LibraryFunctions.setBrowser(LibraryFunctions.java:28)\r\n\tat StepDef.HomePage.open_browser_and_navigate_to_the_Url(HomePage.java:20)\r\n\tat ✽.Open browser and navigate to the Url(file:///D:/AutomationQ/src/test/resources/Features/Timesheet.feature:18)\r\nCaused by: org.openqa.selenium.WebDriverException: Error forwarding the new session Request timed out waiting for a node to become available.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-37FF92FG\u0027, ip: \u0027192.168.10.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.grid.web.servlet.handler.RequestHandler.process(RequestHandler.java:118)\r\n\tat org.openqa.grid.web.servlet.DriverServlet.process(DriverServlet.java:85)\r\n\tat org.openqa.grid.web.servlet.DriverServlet.doPost(DriverServlet.java:69)\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:707)\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:790)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHolder.handle(ServletHolder.java:865)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1655)\r\n\tat io.prometheus.client.filter.MetricsFilter.doFilter(MetricsFilter.java:170)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1642)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHandler.doHandle(ServletHandler.java:533)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.handle(ScopedHandler.java:146)\r\n\tat org.seleniumhq.jetty9.security.SecurityHandler.handle(SecurityHandler.java:548)\r\n\tat org.seleniumhq.jetty9.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:257)\r\n\tat org.seleniumhq.jetty9.server.session.SessionHandler.doHandle(SessionHandler.java:1595)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:255)\r\n\tat org.seleniumhq.jetty9.server.handler.ContextHandler.doHandle(ContextHandler.java:1340)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextScope(ScopedHandler.java:203)\r\n\tat org.seleniumhq.jetty9.servlet.ServletHandler.doScope(ServletHandler.java:473)\r\n\tat org.seleniumhq.jetty9.server.session.SessionHandler.doScope(SessionHandler.java:1564)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextScope(ScopedHandler.java:201)\r\n\tat org.seleniumhq.jetty9.server.handler.ContextHandler.doScope(ContextHandler.java:1242)\r\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.handle(ScopedHandler.java:144)\r\n\tat org.seleniumhq.jetty9.server.handler.StatisticsHandler.handle(StatisticsHandler.java:174)\r\n\tat org.seleniumhq.jetty9.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\r\n\tat org.seleniumhq.jetty9.server.Server.handle(Server.java:503)\r\n\tat org.seleniumhq.jetty9.server.HttpChannel.handle(HttpChannel.java:364)\r\n\tat org.seleniumhq.jetty9.server.HttpConnection.onFillable(HttpConnection.java:260)\r\n\tat org.seleniumhq.jetty9.io.AbstractConnection$ReadCallback.succeeded(AbstractConnection.java:305)\r\n\tat org.seleniumhq.jetty9.io.FillInterest.fillable(FillInterest.java:103)\r\n\tat org.seleniumhq.jetty9.io.ChannelEndPoint$2.run(ChannelEndPoint.java:118)\r\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.runTask(EatWhatYouKill.java:333)\r\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.doProduce(EatWhatYouKill.java:310)\r\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.tryProduce(EatWhatYouKill.java:168)\r\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.run(EatWhatYouKill.java:126)\r\n\tat org.seleniumhq.jetty9.util.thread.ReservedThreadExecutor$ReservedThread.run(ReservedThreadExecutor.java:366)\r\n\tat org.seleniumhq.jetty9.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:765)\r\n\tat org.seleniumhq.jetty9.util.thread.QueuedThreadPool$2.run(QueuedThreadPool.java:683)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "In the HomePage Enter the valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.HomePage.in_the_HomePage_Enter_the_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to Login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.user_should_be_able_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the user is able to login successfully",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.HomePage.verify_the_user_is_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Employee Details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.click_on_Employee_Details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Go to edit employee",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.HomePage.go_to_edit_employee()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will update new email ID",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.user_will_update_new_email_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Message displayed Employee Details updated Successfully",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.HomePage.message_displayed_Employee_Details_updated_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will Validate the updated Email id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.user_will_Validate_the_updated_Email_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will navigate to logout",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.user_will_navigate_to_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Message displayed You have been logged out",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.HomePage.message_displayed_You_have_been_logged_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.HomePage.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});