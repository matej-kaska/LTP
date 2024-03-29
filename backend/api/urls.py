from django.urls import path
from .views.tests import views as test_views
from django.http import JsonResponse

urlpatterns = [
    path("redis/", test_views.RedisTestViewSet.as_view(), name="api_tests_redis"),
    path("sql/", test_views.SQLTestViewSet.as_view(), name="api_tests_sql"),
    path("backend/", lambda req: JsonResponse({"message": "Backend is connected!"})),
]