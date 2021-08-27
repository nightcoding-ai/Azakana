from django.contrib import admin
from .models import Contact, CustomUser, Member
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea
from .models import Teams


class UserAdminConfig(UserAdmin):
    model = CustomUser
    search_fields = ('email', 'username',)
    list_filter = ('email', 'username', 'is_active', 'is_staff')
    list_display = ('email', 'username',
                    'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'username', )}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(CustomUser, UserAdminConfig)
admin.site.register(Teams)
admin.site.register(Member)
admin.site.register(Contact)