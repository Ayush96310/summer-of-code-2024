import pytest
from app import create_app, db
from app.models import InventoryItems, Customer, Staff, Transaction

@pytest.fixture(scope='module')
def test_app():
    app = create_app()
    with app.app_context():
        yield app

@pytest.fixture(scope='module')
def test_client(test_app):
    return test_app.test_client()

@pytest.fixture(scope='function')
def init_database():
    app = create_app()
    with app.app_context():
        db.create_all()
        yield db
        db.session.remove()
        db.drop_all()

def test_inventory_item_model(init_database):
    item = InventoryItems(
        item_sku='12345',
        item_name='Test Item',
        item_description='This is a test item.',
        item_price=100,
        item_qty=50
    )
    db.session.add(item)
    db.session.commit()
    assert item in db.session

def test_customer_model(init_database):
    customer = Customer(
        c_name='Vikas Aggarwal',
        c_email='Vikas.aggarwal@example.com',
        c_contact='1234567890'
    )
    db.session.add(customer)
    db.session.commit()
    assert customer in db.session

def test_staff_model(init_database):
    staff = Staff(
        s_name='Vikas Aggarwal',
        s_email='Vikas.aggarwal@example.com',
        s_isAdmin=True,
        s_contact='0987654321',
        s_password='password'
    )
    db.session.add(staff)
    db.session.commit()
    assert staff in db.session

def test_transaction_model(init_database):
    customer = Customer(
        c_name='Vikas Aggarwal',
        c_email='Vikas.aggarwal@example.com',
        c_contact='1234567890'
    )
    staff = Staff(
        s_name='Vikas Aggarwal',
        s_email='Vikas.aggarwal@example.com',
        s_isAdmin=True,
        s_contact='0987654321',
        s_password='password'
    )
    item = InventoryItems(
        item_sku='12345',
        item_name='Test Item',
        item_description='This is a test item.',
        item_price=100,
        item_qty=50
    )
    db.session.add(customer)
    db.session.add(staff)
    db.session.add(item)
    db.session.commit()

    transaction = Transaction(
        t_amount=200,
        t_category='Test Category',
        customer_id=customer.c_id,
        staff_id=staff.s_id,
        inventory_item_id=item.item_sku
    )
    db.session.add(transaction)
    db.session.commit()

    assert transaction.t_id is not None
    assert transaction.customer_id == customer.c_id
    assert transaction.staff_id == staff.s_id
    assert transaction.inventory_item_id == item.item_sku
    assert transaction.t_amount == 200
    assert transaction.t_category == 'Test Category'
