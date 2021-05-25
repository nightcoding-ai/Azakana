from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea
from .models import Profile, Team

class UserAdminConfig(UserAdmin):
    model = CustomUser
    search_fields = ('email', 'username', 'team',)
    list_filter = ('email', 'username', 'team', 'is_active', 'is_staff')
    list_display = ('email', 'username', 'team',
                    'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'username', 'team',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'team', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(CustomUser, UserAdminConfig)
admin.site.register(Profile)
admin.site.register(Team)