from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.shortcuts import redirect


def details_comparison(request):
    return render(request, 'details_comparison.html')

def overview_research(request):
    return render(request, 'overview_research.html')

def overview_institute(request):
    return render(request, 'overview_institute.html')

def overview_system(request):
    return render(request, 'overview_system.html')

def network_manage(request):
    return render(request, 'network_manage.html')

def network_tech(request):
    return render(request, 'network_tech.html')

def app_education(request):
    return render(request, 'app_education.html')

def app_manage(request):
    return render(request, 'app_manage.html')

def app_research_calculate(request):
    return render(request, 'app_research_calculate.html')

def app_research_cloud(request):
    return render(request, 'app_research_cloud.html')

def app_research_data(request):
    return render(request, 'app_research_data.html')

def app_research_share(request):
    return render(request, 'app_research_share.html')

def app_science(request):
    return render(request, 'app_science.html')

def env_infrastructure(request):
    return render(request, 'env_infrastructure.html')

def env_management(request):
    return render(request, 'env_management.html')

def env_resource(request):
    return render(request, 'env_resource.html')

def comparison(request):
    return render(request, 'chartjs3_1.html')

def comparison2(request):
    return render(request,'chartjs3_2.html')

def comparison3(request):
    return render(request,'chartjs3_3.html')

def comparison4(request):
    return render(request,'chartjs3_4.html')

def comparison5(request):
    return render(request,'chartjs3_5.html')

