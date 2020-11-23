import pytils

from django.db import models
from django.conf import settings

class Profile(models.Model):
    date = models.DateField(auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='profile', unique=True, on_delete=models.CASCADE)
    username = models.CharField(max_length=150, blank=True, unique=True)
    full_name = models.CharField(max_length=200)
    avatar = models.ImageField(default='')
    bio = models.TextField(max_length=600)
    slug = models.SlugField(blank=True)

    def __str__(self):
        return self.owner.username

    def save(self, *args, **kwargs):
        self.username = self.owner.username

        if not self.slug.strip():
            self.slug = pytils.translit.slugify(self.username)
        return super(Profile, self).save(*args, **kwargs)

    def snippet(self):
        return self.bio[:100] + '...'