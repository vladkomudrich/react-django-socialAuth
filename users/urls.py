from rest_framework import routers
from django.urls import path

from users.views import UserViewSet, current_user

router = routers.DefaultRouter()
router.register(r'', UserViewSet, basename='user')

urlpatterns = [
    path('current/', current_user),
]

urlpatterns += router.urls