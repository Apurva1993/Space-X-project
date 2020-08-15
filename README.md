# Space-X-program

Problem statement: Develop a front-end application which would help users list and browse all launches by SpaceX program.

# Approach
In the Angular project initally code is Server Side Rendered so that the application generally renders more quickly, giving users a chance to view the application layout before it becomes fully interactive.
First time the dashboard loads without using any filters using 'https://api.spaceXdata.com/v3/launches?limit=100' api.
Then as user keeps on selecting the filters, filtred data is provided using the api with filter as parameter.

For example: 
User selected launch_year = 20202 filter -> 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=2020' api is hit and then filtered data is shown to user.
Now if user selected launc_successful -> 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=2020&launch_successful=true' is used and filtered data is shown to user.

# Technical details
I have used Angular along with RxJS to achieve the objective.
Subscribed to the subject inside ngOnit and unsubscribed inside ngOnDestro to prevent memomry leaks.
Enhanced performace by utilising Server Side Rendering.

# Responsive Screenshots

Iphone screenshot

![image](https://user-images.githubusercontent.com/69707404/90322489-7a56dc00-df72-11ea-94e7-63c758e87cdd.png)

Ipad screenshot

![image](https://user-images.githubusercontent.com/69707404/90322536-2a2c4980-df73-11ea-993a-d4f0c5c514d1.png)

Laptop Screenshot

![image](https://user-images.githubusercontent.com/69707404/90322596-a9218200-df73-11ea-8a8a-0831374cd940.png)

Desktop Screenshot

![image](https://user-images.githubusercontent.com/69707404/90322651-7461fa80-df74-11ea-829f-51c3b82ffed0.png)

# Lighthouse screenshot for reference
![lighthouse](https://user-images.githubusercontent.com/69707404/90321462-a882ee80-df67-11ea-92a0-b071d7f0ccc8.PNG)

 
