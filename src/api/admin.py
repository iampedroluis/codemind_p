  
import os
from flask_admin import Admin
from .models import db, User, Exercise,Answers, TokenBlockedList, Teacher , AnswersUser, Module
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='CodeMind Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    # admin.add_view(ModelView(ModuleProgress, db.session))
    admin.add_view(ModelView(Exercise, db.session))
    admin.add_view(ModelView(TokenBlockedList, db.session))
    # admin.add_view(ModelView(ExerciseQuestions, db.session))
    # admin.add_view(ModelView(ExerciseAnswer, db.session))
    admin.add_view(ModelView(Module, db.session))
    # admin.add_view(ModelView(SingleChoiceAnswers, db.session))
    admin.add_view(ModelView(Answers, db.session))
    admin.add_view(ModelView(AnswersUser, db.session))
    admin.add_view(ModelView(Teacher, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))