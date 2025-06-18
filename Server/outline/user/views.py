from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.contrib.auth import authenticate ,login ,logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
import json

User = get_user_model()

@csrf_exempt  
def signup_users(request):
    if request.method == "GET":
        return render(request , "signup.html")

    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            username = data.get("username")
            password = data.get("password")

            if not email or not username or not password:
                return JsonResponse({"error": "Email, username, and password are required"}, status=400)

            if User.objects.filter(email=email).exists():
                return JsonResponse({"error": "Email already exists"}, status=400)

            if User.objects.filter(username=username).exists():
                return JsonResponse({"error": "Username already exists"}, status=400)

            user = User(email=email, username=username)
            user.set_password(password) 
            user.save()

            return JsonResponse({
                    "message": "user created successfully",
                    "user": {
                        "username": user.username,
                        "email": user.email,
                        "id": user.id
                    }
                }, status=200)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def login_users(request):
    if request.method == "GET":
        return JsonResponse({"user": "123"}, status=200)
        return render(request , "login.html")

    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data.get("username")  
            password = data.get("password")
            print(username)
            print(password)
            if not username or not password:
                return JsonResponse({"error": "Username and password are required"}, status=400)

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return JsonResponse({
                    "message": "Login successful",
                    "user": {
                        "username": user.username,
                        "email": user.email,
                        "id": user.id
                    }
                }, status=200)
            else:
                return JsonResponse({"error": "Invalid username or password"}, status=401)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)

@login_required 
def curr_user(request):
    user = request.user
    user_data = {
        "email": user.email,
        "username": user.username,
        "id": user.id,
        "is_authenticated": user.is_authenticated
    }
    return JsonResponse({"user": user_data}, status=200)


def logout_users(request):
    user = request.user
    logout(request)

    return JsonResponse({"user": user.username}, status=200)