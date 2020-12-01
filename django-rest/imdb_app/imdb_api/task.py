from celery import shared_task
from celery.task import periodic_task
from celery.schedules import crontab  
from django.core.mail import send_mail
from datetime import timedelta
from django.conf import settings

@shared_task(retry_kwargs={'max_retries': 3, 'countdown': 5})
def send_update_mail(title):
    try:
        send_mail(
            'Information Mail',
            'A new movie ' + title + ' was created!',
            'from@example.com',
            [settings.ADMIN_EMAIL_ADDRESS],
            fail_silently=False
        )
        return True
    except Exception as e:
        try:
            send_update_mail.retry()
        except MaxRetriesExceededError:
            retry_email_1h(title)

@periodic_task(run_every=timedelta(hours=1), options={"task_id":"12345"})
def retry_email_1h(title):
    send_mail(
        'Information Mail',
        'A new movie ' + title + ' was created!',
        'from@example.com',
        [settings.ADMIN_EMAIL_ADDRESS],
        fail_silently=False
    )
    stop()

def stop():
    x = revoke("12345",terminate=True,signal="KILL")