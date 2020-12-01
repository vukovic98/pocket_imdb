from celery import shared_task
from django.core.mail import send_mail
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
    except(Exception, exc):
        raise send_update_mail.retry(exc=exc)
    return True