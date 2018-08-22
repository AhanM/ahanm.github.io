---
layout: post
title: Internship
---
<img style="margin:auto" src="{{ site.baseurl }}/public/viasat.png" width="350">
<br>

## Introduction
I had the wonderful oppurtunity to work as a <em>Software Engineering 
Intern</em> for <strong>Viasat</strong> at Carlsbad in California this summer. 
This is the first time I've interned for a large multi-national company and it's
been a great experience. This blog post will be about my goals and expectations 
going into the internship and the invaluable experiences and lessons I gained 
this summer.

### Working Culture
I was really suprised to find that the working environment at a big company like
Viasat was fairly relaxed and casual. There was definitely an emphasis on
getting the assigned work done in the allotted time; however, there was no 
restriction on how one achieved that. It was also pleasant to discover that the 
company had a fairly horizontal heriarchy where even the ideas and opinions of 
interns were well recieved and given importance. 

I was assigned a workspace in a fishbowl, a lab with workstations and two glass 
walls, alongside about a dozen other interns. All of us were working on somewhat 
similar projects associated with <strong>
[Broadband Communications (BBC)](https://en.wikipedia.org/wiki/Broadband)
</strong>. The supervisor for my project worked nearby and was very available 
and easy to reach out to through messenger. It was re-assuring to be able to
sync up with him and remove blockers with his help at least once everyday.

It was also a very different coping with working a full time job, 40-hours per 
week, and living on a 8 am - 5 pm schedule. I really enjoyed the fact that after 
you left work and got home you were finished for the day and you could completely 
relax. This was verymuch unlike going to university where the lines between 
studying and relaxing were often blurred. It was easy to see why people 
found it comfortable to get adjusted to this kind of living.

### Technical Learnings
The project I was assigned to involved creating a <em>Zero Touch Provisioning 
(ZTP)</em> system to automate the deployment and provisioning for the optical 
fiber network for the newest Viasat satellite
<em>[Viasat-3](https://www.viasat.com/news/going-global)</em> (also known as the
<em>Mythical Beast</em>). Most of my work involved networking and software 
development in python.

One of the most significant technical learnings arose from the orchestration 
server that I was responsible for developing. The orchestration server was
required to execute a long multistep workflow. I was recommended to use a flask 
server since we would not need to scale by very much and we just needed 
some simple endpoint functionality.

{% highlight python %}
# Create an endpoint that executes the workflow
@app.route('/endpoint', methods=['GET'])
def func():
  # step 1
  stepOne()

  # step 2
  stepTwo()

  # return from endpoint
  return {'message': 'Success'}

{% endhighlight %}

The problem with this design was that each step took a large amount of
time to execute. Therefore, the total workflow approximated to about ~ 10 mins. 
That kind of time to complete a request would be considered bad design and would
leave the caller hanging. 

To solve this problem I needed to make the actual workflow asynchronous so that
the endpoint could return immediately. However, this wasn't easy because 
according to the 
[official documentation](http://flask.pocoo.org/docs/0.12/design/) "Flask is 
just not designed for large applications or asynchronous servers." 

After doing some research I found a really useful python library called 
<em>[Celery](http://docs.celeryproject.org/en/latest/getting-started/introduction.html)</em>.

{% highlight python %}
# Define a Celery task
@app.task(name="tasks.workflow")
def workflow(x, y):
    z = x + y

    # step 1
    stepOne()

    return z

# Create an endpoint that executes the workflow
@app.route('/endpoint', methods=['GET'])
def func():
  # execute workflow asynchronously
  workflow.apply_async(args=[arg1, arg2])

  # return from endpoint
  return {'message': 'Success'}

{% endhighlight %}

As we can see now with the help of Celery our endpoint can finish execution
almost immedaitely and our workflow can be executed by another thread in the
background. Now you might be wondering how one would obtain the result or status
of the workflow that has finished execution.

{% highlight python %}
# Create an endpoint that checks workflow status
@app.route('/status/<taskId>', methods=['GET'])
def func(taskId):
  # Get task object from id
  task = workflow.AsyncResult(taskId)

  # Check status
  if task.state == 'PENDING':
    # Workflow has not yet started
    
  elif task.state != 'FAILURE':
    # Workflow succesfully completed or is in progress
    # Do something with state and result

  else:
    # Something went wrong in the background job
    response = {
        'state': task.state,
        ...
    }

    return jsonify(response)

{% endhighlight %}

If you are interested in more details this is the (slightly outdated) blog post
that I used as reference while developing the flask-celery orchestrator server 
for the required workflow: 
[Using Celery With Flask](https://blog.miguelgrinberg.com/post/using-celery-with-flask).

Another interesting learning experience was setting up a PostgreSQL database
from scratch on a remote CentOS server. This article came in very handy as I
configured the server and database priviledges and settings for production:
[Configure and Install PostgreSQL for CentOS](https://www.linode.com/docs/databases/postgresql/how-to-install-postgresql-relational-databases-on-centos-7).

Lastly, bash scripting very much handy for automation various parts of the
process especially workflow testing. I was able to learn more about and use the 
very useful terminal tool: <em>[tmux](https://en.wikipedia.org/wiki/Tmux)</em>.

### Soft Skills
It was a wonderful learning experience working with a team of complete strangers. 
Learning how to communicate most effectively with your team and being a valuable
team player was more challenging than I expected. I noted that the team dynamic 
was certainly variable and was largely dependent on the supervisor that you were
assigned to. 

I was lucky enough to have a very friendly and personable supervisor. He did a
great job introducing the project and he setup "tech-talks" with other members
on our team so that we could learn about various technical concepts required for
the project.

Another great skill I learned was how to connect with other interns and full time 
employees at the company. Meeting and conversing with them outside of
work was a great way of getting to know people better. It was very useful asking
them about their experience at Viasat and about working in the software 
engineering industry.

Another crucial part was learning how to talk about the project that you've
worked on. It was pretty incredible being able to pitch our hackathon idea to
the **CEO of Viasat, Mark Dankburg** at the intern hackathon. Similarly, it was
nerve-racking but valuable experience demoing and presenting out project to our
entire development team. I am sure these skills will prove to be very useful 
regardless of whether I pursue a more research-oriented or a more 
implementation-skewed career.

### Social Experiences
Since I was going to be spending the majority of my summer interning for Viasat
I was hoping for a good social atmosphere even outside of work. However, Viasat
and my fellow interns blew whatever expectations I had out of the water. 

Viasat did an excellent job keeping its interns busy with interesting events 
almost every weekend. There were many intern events, many organized and paid for
by the company and some put together by the social chair among the interns 
(shoutout to my friends Riya and Pat).

My favorite events were definitely the day at the lagoon when the interns got
the opputunity to use several boats, jet-skis and platoons. Not to mention the
free [Board & Brew](http://www.boardandbrew.com) food and refreshments that were
also provided. I also really enjoyed participating in the Vollyball Tournament 
where we were assigned to a team of interns, new grads and full-times based off 
of self-scored skill-level. It gave us a great oopurtunity to network as well as 
learn/practice volleyball even for people (like me) who had never played
before. Perhaps I enjoyed volleyball more than my fellow interns because I had a
big advantage because of my abnormally large height.

The other event I really liked was the Viasat intern Hackathon for which they 
flew in 250+ interns from all over the country to participate. I really enjoy 
going to hackathons and innovating so, naturally, I could not miss this event.
My team "The Slackers" was fortunate enough to win the prize for the category
"Capacity to Deliver the Unexpected". We built the Device Optimization Tool
(DOT) that was essentially a more powerful version of [Task Manager](https://support.apple.com/en-us/HT201464) that
tracked your CPU and bandwidth usage and allowed you to set thresholds and
notifications for both. We even made an alexa skill as a means to notify you if
you were away from your device or were not as tech-savy.

<img style="margin:auto" src="{{ site.baseurl }}/public/images/internship/slackers.jpg" width="400">
<p></p>

I was also fortunate enough to have some great people working alongside me at
the fishbowl. It was suprising how we all got so close over a short-period of
time. It was never a dull moment while working in the fishbowl. We would always
be playing videos on Netflix on our three screen display in the front of the
room and we would also make Costco runs to get snacks for our internal snack
table. This ended up being great way to keep our rival fishbowl interns jealous
of our setup. 

<img style="margin:auto" src="{{ site.baseurl }}/public/images/internship/fishbowl.jpg" width="400">

All in all, it was definitely a blast meeting a lot of new people and making
some meaningful friendships with many of them. I am certainly going to miss 
seeing them around. Hopefully I will get a chance to see some of them again.

### Conclusion
I think this internship was most benificial to me because it gave me a
great insight into what a software engineering job felt like and whether it was
something I want to be doing for a living. It also gave me a lot to think about
in terms of what kind of work culture I enjoy and see myself perservering in. I have
a lot to thank Viasat for in addition to my supervisor and fellow interns. 

I was fortunate enough to make it to the [Viasat Corporate Blog](https://corpblog.viasat.com/viasat-interns-get-competitive-in-companys-largest-hackathon-to-date/) so hopefully I
made my mark at Viasat. I can't wait till next summer for my next internship!