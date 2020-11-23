from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission, SAFE_METHODS

from profiles.models import Profile
from profiles.serializers import ProfileSerializer

class IsOwnerOrReadOnly(BasePermission):
    
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user

class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in permissions.SAFE_METHODS

class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = 'slug'

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)